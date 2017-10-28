import { Component } from '@angular/core';

import { Place } from '../../models/place';

import { AddPlacePage } from '../add-place/add-place';

import { PlacesService } from '../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public addPlacePage = AddPlacePage;
  public places:Place[];

  constructor(private placesService:PlacesService) {}

  ionViewWillEnter () {
      this.places = this.placesService.loadPlaces();
  }

}
