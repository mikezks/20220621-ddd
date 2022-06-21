import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertriebDomainModule } from '@nx-monorepo/vertrieb/domain';
import { HaendlerSucheComponent } from './haendler-suche.component';

@NgModule({
  imports: [CommonModule, VertriebDomainModule],
  declarations: [HaendlerSucheComponent],
  exports: [HaendlerSucheComponent],
})
export class VertriebFeatureHaendlerSucheModule {}
