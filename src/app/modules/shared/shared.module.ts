import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './shared.routes';
import { ModalComponent } from './components/modal/modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [HomeComponent, ModalComponent],
  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  entryComponents: [ModalComponent],
  providers: []
})
export class SharedModule {
}
