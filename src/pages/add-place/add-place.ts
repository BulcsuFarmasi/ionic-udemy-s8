import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoadingController, ModalController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';


import { Location } from '../../models/location';

import { SetLocationPage } from '../set-location/set-location';

import { PlacesService } from '../../services/places';

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
    public imageUrl:string = '';
    
    constructor (private modalController:ModalController,
                 private geolocation:Geolocation,
                 private loadingController:LoadingController,
                 private toastController:ToastController,
                 private camera:Camera,
                 private placesService:PlacesService) {}

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
            this.imageUrl = imageData;
        })
        .catch(err => {
            console.log(err);
        })
    }

    onSubmit(form: NgForm) {
      this.placesService.addPlace(form.value.title, form.value.description,
                                  this.location, this.imageUrl);
      form.reset();
      this.location = {
          lat: 40.7624324,
          lng: -73.9759827
      };
      this.imageUrl = '';
      this.locationIsSet = false;
    }
}
