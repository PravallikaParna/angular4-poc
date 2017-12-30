import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsNotificationsComponentComponent } from './user-settings-notifications-component.component';

describe('UserSettingsNotificationsComponentComponent', () => {
  let component: UserSettingsNotificationsComponentComponent;
  let fixture: ComponentFixture<UserSettingsNotificationsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsNotificationsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsNotificationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
