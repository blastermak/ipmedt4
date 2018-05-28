import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagboekComponent } from './dagboek.component';

describe('DagboekComponent', () => {
  let component: DagboekComponent;
  let fixture: ComponentFixture<DagboekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagboekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagboekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
