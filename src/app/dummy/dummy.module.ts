import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { Mycomponent2Component } from './mycomponent2/mycomponent2.component';


@NgModule({
  declarations: [
    MycomponentComponent,
    Mycomponent2Component
  ],
  imports: [
    CommonModule,
    DummyRoutingModule
  ],
  exports:[
    MycomponentComponent
  ]
})
export class DummyModule { }
