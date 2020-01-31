import { Routes } from '@angular/router';
import { ViewProjectsComponent } from './pages/view-projects/view-projects.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { AuthGuardServiceService as AuthGuard } from '../auth/services/auth-guard-service.service';

export const projectRoutes: Routes = [
  {
    path: 'projects',
    component: ViewProjectsComponent,
    data: {animation: 'Projects'},
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:id',
    component: ViewProjectComponent,
    data: {animation: 'Project'},
    canActivate: [AuthGuard]
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
    data: {animation: 'CreateProject'},
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-project/:id',
    component: EditProjectComponent,
    data: { animation: 'Project' },
    canActivate: [AuthGuard]
  }
];
