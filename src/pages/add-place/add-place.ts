import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalController} from 'ionic-angular';

import { SetLocationPage } from '../set-location/set-location';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
    
    constructor (private modalController:ModalController) {}

    onOpenMap () {
        const modal = this.modalController.create(SetLocationPage);
        modal.present();
    }

    onSubmit(form: NgForm) {
      console.log(form.value);
    }
}
