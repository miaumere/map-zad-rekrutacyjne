import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const declarationsAndExports = [];

const importsAndExports = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...declarationsAndExports],
  imports: [...importsAndExports],
  exports: [...declarationsAndExports, ...importsAndExports],
})
export class SharedModule {}
