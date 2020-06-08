import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MapPageComponent } from './map-page/map-page.component';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map/map.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [MapComponent, MapPageComponent, SideMenuComponent],
  imports: [MapRoutingModule, SharedModule],
})
export class MapModule {}
