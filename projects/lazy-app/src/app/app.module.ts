import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'external',
        loadChildren: './external/external.module#ExternalModule'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
