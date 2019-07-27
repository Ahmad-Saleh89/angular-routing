import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-detail/department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-detail/department-contact/department-contact.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, routingComponents, PageNotFoundComponent, DepartmentDetailComponent, DepartmentOverviewComponent, DepartmentContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
