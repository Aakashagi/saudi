import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomeComponent } from './upcome.component';

describe('UpcomeComponent', () => {
  let component: UpcomeComponent;
  let fixture: ComponentFixture<UpcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
