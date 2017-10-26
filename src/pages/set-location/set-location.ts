import { Component } from '@angular/core';

import {NavParams} from 'ionic-angular';

import { Location } from '../../models/location';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
    public location:Location;
    
    constructor (private navParams:NavParams) {
      this.location = this.navParams.get('location');
    }
}
