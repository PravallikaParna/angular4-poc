import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponentComponent } from './top-nav-component/top-nav-component.component';
import { UserSettingsComponentComponent } from './user-settings-component/user-settings-component.component';
import { UserSettingsProfileComponentComponent } from './user-settings-profile-component/user-settings-profile-component.component';
import { UserSettingsPasswordComponentComponent } from './user-settings-password-component/user-settings-password-component.component';
import { UserSettingsNotificationsComponentComponent } from './user-settings-notifications-component/user-settings-notifications-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponentComponent,
    UserSettingsComponentComponent,
    UserSettingsProfileComponentComponent,
    UserSettingsPasswordComponentComponent,
    UserSettingsNotificationsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Angular4 POC
}
