import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { Place } from '../../models/place';

import { AddPlacePage } from '../add-place/add-place';
import { PlacePage } from '../place/place'

import { PlacesService } from '../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public addPlacePage = AddPlacePage;
  public places:Place[];

  constructor(private placesService:PlacesService,
              private modalController:ModalController) {}

  ionViewWillEnter () {
      this.places = this.placesService.loadPlaces();
  }

  onOpenPlace (place:Place) {
      const modal = this.modalController.create(PlacePage, { place });
      modal.present();
  }

}
