import { Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';

export const projectRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
    data: {animation: 'Projects'}
  }
];
