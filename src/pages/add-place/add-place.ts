import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoadingController, ModalController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';


import { Location } from '../../models/location';

import { SetLocationPage } from '../set-location/set-location';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
    
    public location:Location = {
        lat: 40.7624324,
        lng: -73.9759827
    };
    public locationIsSet:boolean = false;
    
    constructor (private modalController:ModalController,
                 private geolocation:Geolocation,
                 private loadingController:LoadingController,
                 private toastController:ToastController,
                 private camera:Camera) {}

    onLocate () {
        const loader = this.loadingController.create({
            content: 'Getting your Location...'
        })
        loader.present();
        this.geolocation.getCurrentPosition()
            .then(location => {
                loader.dismiss();
                this.location.lat = location.coords.latitude;
                this.location.lng = location.coords.longitude;
                this.locationIsSet = true;
            })
            .catch(error => {
                loader.dismiss();
                const toast = this.toastController.create({
                    message: 'Could not get location, please pick it manually!',
                    duration: 2500
                })
                toast.present();
            });
    }

    onOpenMap () {
        const modal = this.modalController.create(SetLocationPage, {location: this.location,
        isSet: this.locationIsSet});
        modal.present();
        modal.onDidDismiss(data => {
            if (data) {
                this.location = data.location;
                this.locationIsSet = true;
            }
        })
    }

    onTakePhoto () {
        this.camera.getPicture({
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        })
        .then(imageData => {
            console.log(imageData)
        })
        .catch(err => {
            console.log(err);
        })
    }

    onSubmit(form: NgForm) {
      console.log(form.value);
    }
}
