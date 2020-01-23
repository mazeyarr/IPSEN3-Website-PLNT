import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './shared.routes';
import {SearchBarComponent} from './components/searchbar/searchBar.component';
import {MDBRootModule} from 'angular-bootstrap-md';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectModule } from '../project/project.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { TagCloudComponent } from './components/tag-cloud/tag-cloud.component';

@NgModule({
  declarations: [HomeComponent, SearchBarComponent, SearchResultsComponent, TagCloudComponent],
  exports: [],
  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    ProjectModule,
    FormsModule,
  ],
  entryComponents: [],
  providers: [
    CommonModule,
    MDBRootModule
  ]
})
export class SharedModule {

}
