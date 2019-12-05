import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './shared.routes';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule
  ]
})
export class SharedModule { }
