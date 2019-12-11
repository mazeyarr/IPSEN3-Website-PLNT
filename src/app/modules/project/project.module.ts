import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { projectRoutes } from './project.routes';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { ViewProjectsComponent } from './pages/view-projects/view-projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import {ButtonsModule, IconsModule, TableModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import { LikeComponent } from './components/like/like.component';

@NgModule({
  declarations: [
    EditProjectComponent,
    CreateProjectComponent,
    ViewProjectComponent,
    ViewProjectsComponent,
    ProjectCardComponent,
    ProjectListComponent,
    LikeComponent
  ],
  exports: [
    ProjectCardComponent
  ],
  imports: [
    RouterModule.forChild(projectRoutes),
    CommonModule,
    IconsModule,
    ButtonsModule,
    TableModule,
    FormsModule,
  ]
})
export class ProjectModule { }
