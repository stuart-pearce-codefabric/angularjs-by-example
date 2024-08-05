import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigModule } from './app.config';
import { AppCoreModule } from './app.core';
import { AppRoutesModule } from './app.routes';
import { AppServicesModule } from './app.services';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppConfigModule,
    AppCoreModule,
    AppRoutesModule,
    AppServicesModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
