import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenComponent } from './children.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';

@NgModule({
  declarations: [ChildrenComponent, FirstChildComponent, SecondChildComponent],
  imports: [ChildrenRoutingModule],
  exports: [ChildrenComponent, FirstChildComponent, SecondChildComponent],
})
export class ChildrenModule {}
