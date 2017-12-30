import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsPasswordComponentComponent } from './user-settings-password-component.component';

describe('UserSettingsPasswordComponentComponent', () => {
  let component: UserSettingsPasswordComponentComponent;
  let fixture: ComponentFixture<UserSettingsPasswordComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsPasswordComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsPasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
