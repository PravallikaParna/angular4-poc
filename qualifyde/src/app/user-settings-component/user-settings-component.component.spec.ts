import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsComponentComponent } from './user-settings-component.component';

describe('UserSettingsComponentComponent', () => {
  let component: UserSettingsComponentComponent;
  let fixture: ComponentFixture<UserSettingsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
