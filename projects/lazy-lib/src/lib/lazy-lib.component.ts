import { Component, OnInit } from '@angular/core';
import { LazyLibService } from './lazy-lib.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'exp-lazy-lib',
  template: `
    <h2>Lazy Lib Component</h2>
    <a routerLink="extra">Lazy Extra</a>
  `,
  styles: []
})
export class LazyLibComponent implements OnInit {

  constructor(ar: ActivatedRoute, lazyService: LazyLibService) { }

  ngOnInit() {
  }

}
