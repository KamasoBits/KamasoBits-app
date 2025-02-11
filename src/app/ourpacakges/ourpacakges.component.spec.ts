import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpacakgesComponent } from './ourpacakges.component';

describe('OurpacakgesComponent', () => {
  let component: OurpacakgesComponent;
  let fixture: ComponentFixture<OurpacakgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurpacakgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurpacakgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
