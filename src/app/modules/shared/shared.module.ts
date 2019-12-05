import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './shared.routes';
import {SearchSectionComponent} from './components/search-section/search-section.component';
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {MDBRootModule} from 'angular-bootstrap-md';



@NgModule({
  declarations: [HomeComponent, SearchSectionComponent, SearchbarComponent],
  exports: [
    SearchSectionComponent
  ],
  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule,
    MDBRootModule
  ]
})
export class SharedModule { }
