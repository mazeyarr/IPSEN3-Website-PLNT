import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { projectRoutes } from './project.routes';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { ViewProjectsComponent } from './pages/view-projects/view-projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ButtonsModule, IconsModule, MDBBootstrapModule, TableModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LikeComponent } from './components/like/like.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CreateProjectDropzoneComponent } from './components/create-project-dropzone/create-project-dropzone.component';
import { NgxdModule } from '@ngxd/core';
import { CreateProjectDataComponent } from './components/create-project-data/create-project-data.component';
import { CreateProjectUploadComponent } from './components/create-project-upload/create-project-upload.component';
import { PropertyShowComponent } from './components/property-show/property-show.component';

@NgModule({
  declarations: [
    EditProjectComponent,
    CreateProjectComponent,
    ViewProjectComponent,
    ViewProjectsComponent,
    ProjectCardComponent,
    ProjectListComponent,
    LikeComponent,
    CreateProjectDropzoneComponent,
    CreateProjectDataComponent,
    CreateProjectUploadComponent,
    PropertyShowComponent,
  ],
  exports: [
    ProjectCardComponent,
    ProjectListComponent
  ],
  imports: [
    RouterModule.forChild(projectRoutes),
    CommonModule,
    IconsModule,
    ButtonsModule,
    TableModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxDropzoneModule,
    NgxdModule
  ],
  entryComponents: [
    CreateProjectDropzoneComponent
  ]
})
export class ProjectModule { }
