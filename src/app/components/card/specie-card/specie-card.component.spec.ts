import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieCardComponent } from './specie-card.component';

describe('SpecieCardComponent', () => {
  let component: SpecieCardComponent;
  let fixture: ComponentFixture<SpecieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
