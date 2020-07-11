import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private user: BehaviorSubject<User | null>;
  user$: Observable<User | null>;

  constructor() {
    this.user = new BehaviorSubject(null);

    this.user$ = this.user.asObservable();
  }

  update(user: User): void {
    this.user.next(user);
  }

  getUser(): User | null {
    return this.user.getValue();
  }

  hasFlags(values: string | string[]): boolean {
    const featureFlags = this.getUser()?.featureFlags;
    const flags: string[] = ([] as string[]).concat(values);

    return featureFlags
      ? Object.entries(featureFlags).some(([key, value]) =>
          flags.some((flag) => key === flag && value)
        )
      : false;
  }
}
