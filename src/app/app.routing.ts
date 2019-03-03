import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: 'nav',
  loadChildren: './pages/nav/nav.module#NavModule'
}, {
  path: '**',
  loadChildren: './pages/error/error.module#ErrorModule'
}];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
