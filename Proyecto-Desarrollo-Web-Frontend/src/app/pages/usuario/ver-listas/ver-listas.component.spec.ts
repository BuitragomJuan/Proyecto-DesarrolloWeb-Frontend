import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerListasComponent } from './ver-listas.component';

describe('VerListasComponent', () => {
  let component: VerListasComponent;
  let fixture: ComponentFixture<VerListasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerListasComponent]
    });
    fixture = TestBed.createComponent(VerListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
