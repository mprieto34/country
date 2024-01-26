import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
    ],

    imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      RouterModule,
      HttpClientModule

  ],
  providers: [
    provideClientHydration()
],
    bootstrap: [AppComponent],
})
export class AppModule { }
