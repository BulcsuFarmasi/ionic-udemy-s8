import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

import { Location } from '../../models/location';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
    public location:Location;
    public marker:Location
    
    constructor (private navParams:NavParams,
                 private viewController:ViewController) {
      this.location = this.navParams.get('location');
      if (this.navParams.get('isSet')) {
          this.marker = this.location;
      }
    }

    onAbort  () {
        this.viewController.dismiss();
    }

    onConfirm () {
        this.viewController.dismiss({location: this.marker})
    }

    onSetMarker (event:any) {
      console.log(event);
      this.marker = new Location(event.coords.lat, event.coords.lng);
    }
}
