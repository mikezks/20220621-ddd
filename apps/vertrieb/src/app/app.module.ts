import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'vertrieb',
      pathMatch: 'full'
  },
  {
      path: 'vertrieb',
      loadChildren: () => import('@nx-monorepo/vertrieb/feature-haendler-suche')
          .then(esm => esm.VertriebFeatureHaendlerSucheModule)
  }
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
