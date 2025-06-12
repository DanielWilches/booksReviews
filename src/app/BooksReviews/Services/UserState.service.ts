import { Injectable, signal, WritableSignal } from '@angular/core';
import { CustomUserProfile } from '@Interfaces/CustomUserProfile.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  currentUser: WritableSignal<CustomUserProfile> = signal<CustomUserProfile>({} as CustomUserProfile);

  Login(user: CustomUserProfile) {
    this.currentUser.set(user);
  }

  logout() {
    this.currentUser.set({} as CustomUserProfile);
  }

  updateUsers(updater: (users: CustomUserProfile) => CustomUserProfile) {
    this.currentUser.update(updater);
  }
}
