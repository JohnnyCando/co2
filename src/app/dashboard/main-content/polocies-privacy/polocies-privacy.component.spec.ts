import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolociesPrivacyComponent } from './polocies-privacy.component';

describe('PolociesPrivacyComponent', () => {
  let component: PolociesPrivacyComponent;
  let fixture: ComponentFixture<PolociesPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolociesPrivacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolociesPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
