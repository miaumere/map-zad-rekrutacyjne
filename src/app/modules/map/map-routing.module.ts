import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MapPageComponent } from './map-page/map-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapPageComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: MapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
