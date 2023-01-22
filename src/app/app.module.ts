import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { MoviesService } from './features/content/services/movies.service';
import { environment } from '../environments/environment';
import {OnTVService} from './features/content/services/onTV.service';
import {SeoService} from './core/services/seo.service';

import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {SwiperModule} from 'swiper/angular';
import {NgOptimizedImage} from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutComponent } from './core/components/layout/layout.component';
import { TopNavComponent } from './core/components/layout/top-nav/top-nav.component';
import { SideNavComponent } from './core/components/layout/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LayoutComponent, 
    TopNavComponent, 
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    SwiperModule,
    NgOptimizedImage,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    MoviesService,
    OnTVService,
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
