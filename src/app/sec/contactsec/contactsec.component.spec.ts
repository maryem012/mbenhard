import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsecComponent } from './contactsec.component';

describe('ContactsecComponent', () => {
  let component: ContactsecComponent;
  let fixture: ComponentFixture<ContactsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
