import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCodeRecoverComponent } from './email-code-recover.component';

describe('EmailCodeRecoverComponent', () => {
  let component: EmailCodeRecoverComponent;
  let fixture: ComponentFixture<EmailCodeRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCodeRecoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailCodeRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
