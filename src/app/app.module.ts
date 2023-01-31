import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgOptimizedImage } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./features/home/home.component";
import { environment } from "../environments/environment";

import { SelectComponent } from "./core/components/select/select.component";
import { ButtonComponent } from "./core/components/button/button.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { ModulesComponent } from "./features/modules/modules.component";
import { TableComponent } from "./core/components/table/table.component";
import { DataPropertyGetterPipe } from "./core/components/table/data-property-getter.pipe";
import { LayoutComponent } from "./core/components/layout/layout.component";
import { TopNavComponent } from "./core/components/layout/top-nav/top-nav.component";
import { SideNavComponent } from "./core/components/layout/side-nav/side-nav.component";
import { InputComponent } from "./core/components/input/input.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";

import { SwiperModule } from "swiper/angular";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LayoutComponent,
    TopNavComponent,
    SideNavComponent,
    ModulesComponent,
    TableComponent,
    DataPropertyGetterPipe,
    InputComponent,
    ButtonComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      registrationStrategy: "registerWhenStable:30000",
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    NgOptimizedImage,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
