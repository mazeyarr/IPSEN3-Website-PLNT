import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { AuthGuardServiceService as AuthGuard} from '../auth/services/auth-guard-service.service';
import {TagResultsComponent} from './pages/tag-results/tag-results.component';

export const sharedRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
    data: { animation: 'SearchResults' },
    canActivate: [AuthGuard]
  },
  {
    path: 'tag-results',
    component: TagResultsComponent,
    data: { animation: 'SearchResults' },
    canActivate: [AuthGuard]
  }
];
