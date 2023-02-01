import { WarrantyKeyAssignManualComponent } from './pages/warranty-keys/warranty-key-assign-manual/warranty-key-assign-manual.component';
import { WarrantyKeysComponent } from './pages/warranty-keys/warranty-keys.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import { ModulesComponent } from './features/modules/modules.component';
import routes from './core/components/layout/side-nav/routes';

// const routes: Routes = [
//   {path: '', component: WarrantyKeysComponent, pathMatch: 'full'},
//   {path: 'warranty-keys', component: WarrantyKeysComponent, pathMatch: 'full'},
//   {path: 'assign-key-manual', component: WarrantyKeyAssignManualComponent, pathMatch: 'full'},
//   {path: '404', component: NotFoundComponent, pathMatch: 'full'},
//   {path: 'modules', component: ModulesComponent, pathMatch: 'full'},
//   {path: '**', redirectTo: '404'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
