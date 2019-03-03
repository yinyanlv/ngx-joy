import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {NavRouting} from './nav.routing';
import {NavModule as JNavModule} from '../../../components/nav/index';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NavRouting,
    JNavModule
  ]
})
export class NavModule {
}
