import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

import { UserStoreService } from './user-store.service';

export interface User {
  name: string;
  featureFlags: Record<string, boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userStore: UserStoreService) {}

  getUser(): Observable<User> {
    const fakeUser: User = {
      name: 'drei',
      featureFlags: {
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
