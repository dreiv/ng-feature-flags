import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  constructor(private store: UserStoreService) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.store.hasFlags(route?.data?.flags) ? load() : of(null);
  }
}
