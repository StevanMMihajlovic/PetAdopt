import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptioninfoComponent } from './adoptioninfo.component';

describe('AdoptioninfoComponent', () => {
  let component: AdoptioninfoComponent;
  let fixture: ComponentFixture<AdoptioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptioninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
