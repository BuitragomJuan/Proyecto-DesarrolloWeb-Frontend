import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotarDesvotarComponent } from './votar-desvotar.component';

describe('VotarDesvotarComponent', () => {
  let component: VotarDesvotarComponent;
  let fixture: ComponentFixture<VotarDesvotarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotarDesvotarComponent]
    });
    fixture = TestBed.createComponent(VotarDesvotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
