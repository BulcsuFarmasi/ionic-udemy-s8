import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalController} from 'ionic-angular';


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
    
    constructor (private modalController:ModalController) {}

    onOpenMap () {
        const modal = this.modalController.create(SetLocationPage, {location: this.location});
        modal.present();
    }

    onSubmit(form: NgForm) {
      console.log(form.value);
    }
}
