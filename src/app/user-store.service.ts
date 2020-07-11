import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  constructor() {}

  update(user: any) {
    console.log(user);
  }
}
