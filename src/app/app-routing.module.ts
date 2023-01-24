import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import { ModulesComponent } from './features/modules/modules.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '404', component: NotFoundComponent, pathMatch: 'full'},
  {path: 'movies', loadChildren: () => import('./features/content/content.module').then(m => m.ContentModule)},
  {path: 'tv-shows', loadChildren: () => import('./features/content/content.module').then(m => m.ContentModule)},
  {path: 'modules', component: ModulesComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
