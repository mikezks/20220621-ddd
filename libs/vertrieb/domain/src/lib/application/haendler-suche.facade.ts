import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Haendler } from '../entities/haendler';
import { HaendlerDataService } from '../infrastructure/haendler.data.service';

@Injectable({ providedIn: 'root' })
export class HaendlerSucheFacade {
  private haendlerListSubject = new BehaviorSubject<Haendler[]>([]);
  haendlerList$ = this.haendlerListSubject.asObservable();

  constructor(private haendlerDataService: HaendlerDataService) {}

  load(): void {
    this.haendlerDataService.load().subscribe({
      next: (haendlerList) => {
        this.haendlerListSubject.next(haendlerList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
