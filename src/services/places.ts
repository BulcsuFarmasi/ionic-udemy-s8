import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Location } from '../models/location';
import { Place } from '../models/place';

@Injectable()
export class PlacesService {
    private places:Place[] = [];

    constructor (private storage:Storage){}

    addPlace (title:string, description:string, location:Location, imageUrl) {
        const place =  new Place(title, description, location, imageUrl);
        this.places.push(place);
        this.storage.set('places', this.places)
            .then()
            .catch((err) => {
                this.places.splice(this.places.indexOf(place), 1);
            });
    }

    deletePlace (index:number) {
        this.places.splice(index, 1);
    }

    fetchPlaces () {
        this.storage.get('places')
            .then((places:Place[]) => {
                this.places = places != null ? places : [];
            })
            .catch(err => {
                console.log(err);
            });
    }

    loadPlaces () {
        return this.places.slice();
    }
}