import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiFilhoComponent } from './pai-filho.component';

describe('PaiComponent', () => {
  let component: PaiFilhoComponent;
  let fixture: ComponentFixture<PaiFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiFilhoComponent]
    });
    fixture = TestBed.createComponent(PaiFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
