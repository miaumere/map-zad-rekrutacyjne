import { Injectable } from '@angular/core';
import { IGeolocation } from './models/geolocation.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }
  getPosition(): Promise<IGeolocation> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
          console.log(err)
        });
    });

  }
}
