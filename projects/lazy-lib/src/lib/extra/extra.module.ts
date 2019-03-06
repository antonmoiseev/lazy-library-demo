import { NgModule } from '@angular/core';
import { ExtraComponent } from './extra.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'extra',
                component: ExtraComponent
            }
        ])
    ],
    declarations: [
        ExtraComponent
    ],
    exports: [
        ExtraComponent
    ]
})
export class ExtraModule {}