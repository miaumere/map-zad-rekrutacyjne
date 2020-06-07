import { MapService } from './../map.service';
import { AfterViewInit, Component } from '@angular/core';
import { defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  constructor(private mapService: MapService) { }

  map: Map;

  ngAfterViewInit() {
    let longitude: number;
    let latitude: number;


    // jak error trzeba jakis modal czy cos
    this.mapService.getPosition().then(geolocation => {
      longitude = geolocation?.lng;
      latitude = geolocation?.lat;
      console.log(geolocation)


    })

    console.log(latitude)
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [49.9977752, 22.0562191],
        zoom: 3
      }),
      // controls: defaultControls().extend([
      //   new ZoomToExtent({
      //     extent: [
      //       813079.7791264898, 5929220.284081122,
      //       848966.9639063801, 5936863.986909639
      //     ]
      //   })
      // ])
    });
  }

}
