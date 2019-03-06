import { NgModule } from '@angular/core';
import { LazyLibComponent } from './lazy-lib.component';
import { RouterModule } from '@angular/router';
import { ExtraModule } from './extra/extra.module';

export function extraModuleLoader() {
  return ExtraModule;
}

@NgModule({
  declarations: [LazyLibComponent],
  imports: [
    ExtraModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyLibComponent
      },
      // {
      //   path: 'extra',
      //   loadChildren: extraModuleLoader
      // }
    ])
  ],
  exports: [LazyLibComponent],
})
export class LazyLibModule {}