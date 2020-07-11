import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private store: UserStoreService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.store.hasFlags(route.data.flags);
  }
}
