import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const sharedRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'Home' }
  }
];
