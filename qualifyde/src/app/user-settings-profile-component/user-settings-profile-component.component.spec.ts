import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsProfileComponentComponent } from './user-settings-profile-component.component';

describe('UserSettingsProfileComponentComponent', () => {
  let component: UserSettingsProfileComponentComponent;
  let fixture: ComponentFixture<UserSettingsProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
