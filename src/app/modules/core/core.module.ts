import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

const declarationsAndExports = [NavbarComponent];

@NgModule({
  declarations: [...declarationsAndExports],
  imports: [CommonModule],
  exports: [...declarationsAndExports],
})
export class CoreModule {}
