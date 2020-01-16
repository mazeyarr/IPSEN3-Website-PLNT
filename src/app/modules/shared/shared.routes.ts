import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { AuthGuardServiceService as AuthGuard} from '../auth/services/auth-guard-service.service';

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
  }
];
