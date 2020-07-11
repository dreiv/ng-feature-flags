import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { FeatureFlagDirective } from './feature-flag.directive';

export function preloadUser(userService: UserService) {
  return () => userService.getUser().toPromise();
}

@NgModule({
  declarations: [AppComponent, FeatureFlagDirective],
  imports: [BrowserModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadUser,
      deps: [UserService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
