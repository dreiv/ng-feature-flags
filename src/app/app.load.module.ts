import { NgModule, APP_INITIALIZER } from '@angular/core';

import { UserService } from './services/user.service';

function preloadUser(userService: UserService) {
  return () => userService.getUser().toPromise();
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [UserService],
      useFactory: preloadUser
    }
  ]
})
export class AppLoadModule {}
