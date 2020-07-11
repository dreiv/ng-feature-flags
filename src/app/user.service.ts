import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userStore: UserStoreService) {}

  getUser() {
    const fakeUser = {
      name: 'drei',
      featureFlag: {
        a: true,
        b: false
      }
    };

    return timer(300).pipe(
      mapTo(fakeUser),
      tap((user) => this.userStore.update(user))
    );
  }
}
