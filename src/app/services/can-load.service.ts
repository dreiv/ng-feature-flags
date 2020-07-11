import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadFlag implements CanLoad {
  constructor(private store: UserStoreService) {}

  canLoad(route: Route): boolean {
    return this.store.hasFlags(route?.data?.flags);
  }
}
