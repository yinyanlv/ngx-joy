import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule, MatListModule, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {NavComponent} from './nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {
}
