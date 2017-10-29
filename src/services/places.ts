import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';

import { Location } from '../models/location';
import { Place } from '../models/place';

declare var cordova:any;

@Injectable()
export class PlacesService {
    private places:Place[] = [];

    constructor (private storage:Storage, private file:File){}

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
        const place = this.places[index];
        this.places.splice(index, 1);
        this.storage.set('places', this.places)
            .then(() => {
                this.removeFile(place);
            })
            .catch(err => {
                console.log(err);
            });
    }

    fetchPlaces () {
        return this.storage.get('places')
            .then((places:Place[]) => {
                this.places = places != null ? places : [];
                return this.places.slice();
            })
            .catch(err => {
                console.log(err);
            });
    }

    loadPlaces () {
        return this.places.slice();
    }

    private removeFile (place:Place) {
        const currentName = place.imageUrl.replace(/^.*[\\\/]/, '');
        this.file.removeFile(cordova.file.dataDirectory, currentName)
            .then(() => {
                console.log('Removed file')
            })
            .catch(() => {
                console.log('Error while removing file');
                this.addPlace(place.title, place.description, place.location, place.imageUrl)
            })

    }
}