import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from './external.component';
import { RouterModule } from '@angular/router';
import { LazyLibComponent, LazyLibModule } from 'lazy-lib';

@NgModule({
  declarations: [ExternalComponent],
  imports: [
    CommonModule,
    LazyLibModule
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     loadChildren: () => LazyLibModule
    //   }
    // ])
  ]
})
export class ExternalModule { }
