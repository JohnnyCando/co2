import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAnnouncementsComponent } from './legal-announcements.component';

describe('LegalAnnouncementsComponent', () => {
  let component: LegalAnnouncementsComponent;
  let fixture: ComponentFixture<LegalAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
