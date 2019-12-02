import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { projectRoutes } from './project.routes';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    RouterModule.forChild(projectRoutes),
    CommonModule,
  ]
})
export class ProjectModule { }
