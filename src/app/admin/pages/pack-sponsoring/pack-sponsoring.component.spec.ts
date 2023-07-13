import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackSponsoringComponent } from './pack-sponsoring.component';

describe('PackSponsoringComponent', () => {
  let component: PackSponsoringComponent;
  let fixture: ComponentFixture<PackSponsoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackSponsoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackSponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
