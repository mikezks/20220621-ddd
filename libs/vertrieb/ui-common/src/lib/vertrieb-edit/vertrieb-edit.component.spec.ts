import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertriebEditComponent } from './vertrieb-edit.component';

describe('VertriebEditComponent', () => {
  let component: VertriebEditComponent;
  let fixture: ComponentFixture<VertriebEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VertriebEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VertriebEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
