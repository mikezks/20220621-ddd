import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertriebDomainModule } from '@nx-monorepo/vertrieb/domain';
import { VertriebEditModule } from '@nx-monorepo/vertrieb/ui-common';
import { HaendlerSucheComponent } from './haendler-suche.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: HaendlerSucheComponent
      }
    ]),
    VertriebDomainModule,
    VertriebEditModule
  ],
  declarations: [HaendlerSucheComponent],
  exports: [HaendlerSucheComponent],
})
export class VertriebFeatureHaendlerSucheModule {}
