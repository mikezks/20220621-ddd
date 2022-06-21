import { Component, OnInit } from '@angular/core';
import { HaendlerSucheFacade } from '@nx-monorepo/vertrieb/domain';

@Component({
  selector: 'vertrieb-haendler-suche',
  templateUrl: './haendler-suche.component.html',
  styleUrls: ['./haendler-suche.component.scss'],
})
export class HaendlerSucheComponent implements OnInit {
  haendlerList$ = this.haendlerSucheFacade.haendlerList$;

  constructor(private haendlerSucheFacade: HaendlerSucheFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.haendlerSucheFacade.load();
  }
}
