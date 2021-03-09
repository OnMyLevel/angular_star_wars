import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauCardComponent } from './vaisseau-card.component';

describe('VaisseauCardComponent', () => {
  let component: VaisseauCardComponent;
  let fixture: ComponentFixture<VaisseauCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaisseauCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseauCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
