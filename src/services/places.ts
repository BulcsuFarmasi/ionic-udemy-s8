import { Location } from '../models/location';
import { Place } from '../models/place';

export class PlacesService {
    private places:Place[] = [];

    addPlace (title:string, description:string, location:Location, imageUrl) {
        const place =  new Place(title, description, location, imageUrl);
        this.places.push(place);
    }

    deletePlace (index:number) {
        this.places.slice(index, 1);
    }

    loadPlaces () {
        return this.places.slice();
    }
}