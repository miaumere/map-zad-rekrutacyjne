import { MapService } from './../map.service';
import { AfterViewInit, Component } from '@angular/core';
import 'ol/ol.css';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import { circular } from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  constructor(private mapService: MapService) { }


  ngAfterViewInit(): void {
    const map = new Map({
      target: 'map-container',
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
          })
        })
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });

    const source = new VectorSource();
    const layer = new VectorLayer({
      source: source
    });
    map.addLayer(layer);

    navigator.geolocation.watchPosition(function (pos) {
      const coords = [pos.coords.longitude, pos.coords.latitude];
      const accuracy = circular(coords, pos.coords.accuracy);
      source.clear(true);
      source.addFeatures([
        new Feature(accuracy.transform('EPSG:4326', map.getView().getProjection())),
        new Feature(new Point(fromLonLat(coords)))
      ]);
    }, function (error) {
      alert(`ERROR: ${error.message}`);
    }, {
      enableHighAccuracy: true
    });


    this.test();
  }

  test() {

  }



}
