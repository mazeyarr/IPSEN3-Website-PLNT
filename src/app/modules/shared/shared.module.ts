import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './shared.routes';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectModule } from '../project/project.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    ProjectModule
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {
}
