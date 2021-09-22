import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildFirstComponent } from './child-first/child-first.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { ChildComponent } from './child/child.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChildFirstComponent,
    ChildSecondComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ChildModule { }
