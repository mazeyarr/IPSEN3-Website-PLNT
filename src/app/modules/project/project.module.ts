import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { projectRoutes } from './project.routes';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { ViewProjectsComponent } from './pages/view-projects/view-projects.component';

@NgModule({
  declarations: [EditProjectComponent, CreateProjectComponent, ViewProjectComponent, ViewProjectsComponent],
  imports: [
    RouterModule.forChild(projectRoutes),
    CommonModule,
  ]
})
export class ProjectModule { }
