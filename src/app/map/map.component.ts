import { MapService } from './../map.service';
import { AfterViewInit, Component } from '@angular/core';
import { defaults as defaultControls } from 'ol/control';

import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Geolocation from 'ol/Geolocation';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  constructor(private mapService: MapService) { }


  map = new Map({
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  });
  geolocation

  ngAfterViewInit(): void {
    this.test();
    throw new Error("Method not implemented.");
  }

  // el(id) {
  //   return document.getElementById(id);
  // }

  // el('track').addEventListener('change', function() {
  //   geolocation.setTracking(this.checked);
  // });

  // update the HTML page when the position changes.
  test() {
    const geolocation = new Geolocation({
      // enableHighAccuracy must be set to true to have the heading value.
      trackingOptions: {
        enableHighAccuracy: true
      },
      projection: this.map.view.getProjection()
    });

    this.geolocation = geolocation;

    // this.geolocation.on('change', function() {


    //   el('accuracy').innerText = this.geolocation.getAccuracy() + ' [m]';
    //   el('altitude').innerText = this.geolocation.getAltitude() + ' [m]';
    //   el('altitudeAccuracy').innerText = this.geolocation.getAltitudeAccuracy() + ' [m]';
    //   el('heading').innerText = this.geolocation.getHeading() + ' [rad]';
    //   el('speed').innerText = this.geolocation.getSpeed() + ' [m/s]';
    // });

    // handle geolocation error.
    this.geolocation.on('error', function (error) {
      const info = document.getElementById('info');
      info.innerHTML = error.message;
      info.style.display = '';
    });

    const accuracyFeature = new Feature();
    this.geolocation.on('change:accuracyGeometry', function () {
      accuracyFeature.setGeometry(this.geolocation.getAccuracyGeometry());
    });

    const positionFeature = new Feature();
    positionFeature.setStyle(new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    }));

    this.geolocation.on('change:position', function () {
      const coordinates = this.geolocation.getPosition();
      positionFeature.setGeometry(coordinates ?
        new Point(coordinates) : null);
    });

    new VectorLayer({
      map: this.map,
      source: new VectorSource({
        features: [accuracyFeature, positionFeature]
      })
    });
  }

  //   let longitude: number;
  //   let latitude: number;


  //   // jak error trzeba jakis modal czy cos
  //   this.mapService.getPosition().then(geolocation => {
  //     longitude = geolocation?.lng;
  //     latitude = geolocation?.lat;
  //     console.log(geolocation);


  //   });

  // }

}
