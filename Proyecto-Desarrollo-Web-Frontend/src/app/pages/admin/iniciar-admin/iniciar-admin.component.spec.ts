import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarAdminComponent } from './iniciar-admin.component';

describe('IniciarAdminComponent', () => {
  let component: IniciarAdminComponent;
  let fixture: ComponentFixture<IniciarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciarAdminComponent]
    });
    fixture = TestBed.createComponent(IniciarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
