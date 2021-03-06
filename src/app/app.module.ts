import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './modules/shared/components/nav-bar/nav-bar.component';
import { NavBarBrandComponent } from './modules/shared/components/nav-bar-brand/nav-bar-brand.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectModule } from './modules/project/project.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarBrandComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    ProjectModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
