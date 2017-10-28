import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


import { Place } from  '../../models/place';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  public place:Place;

  constructor (private navParams: NavParams,
               private viewController:ViewController) {
    this.place = this.navParams.get('place');
  }

  onDelete () {

    this.onLeave();
  }

  onLeave () {
      this.viewController.dismiss();
  }


}
