import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';


import { Place } from  '../../models/place';

import { PlacesService } from '../../services/places';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  public place:Place;
  private index:number

  constructor (private navParams: NavParams,
               private viewController:ViewController,
               private placesSerivce: PlacesService) {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }

  onDelete () {
    this.placesSerivce.deletePlace(this.index);
    this.onLeave();
  }

  onLeave () {
      this.viewController.dismiss();
  }


}
