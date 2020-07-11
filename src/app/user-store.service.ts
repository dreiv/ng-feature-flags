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
}
