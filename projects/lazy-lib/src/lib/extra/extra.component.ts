import { Component } from '@angular/core';
import { LazyLibService } from '../lazy-lib.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'extra-component',
    template: '<h3>Extra component</h3>',
    styles: ['']
})
export class ExtraComponent {
  constructor(lazyService: LazyLibService, ar: ActivatedRoute) {}
}
