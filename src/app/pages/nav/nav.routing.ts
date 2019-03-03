import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavComponent} from './nav.component';

const routes: Routes = [{
  path: '',
  component: NavComponent
}];

export const NavRouting: ModuleWithProviders = RouterModule.forChild(routes);
