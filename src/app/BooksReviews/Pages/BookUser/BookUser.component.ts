import { ChangeDetectionStrategy, Component, inject, Input, signal, WritableSignal, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { CustomUserProfile } from '@Interfaces/CustomUserProfile.interface';
import { UserModel } from '@Interfaces/UserModel.interfaces';
import { UserService } from '@Services/User.service';
import { UserStateService } from '@Services/UserState.service';

@Component({
  selector: 'app-book-user',
  imports: [],
  templateUrl: './BookUser.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookUserComponent {
  @Input({ required: true }) showModalProperty!: WritableSignal<boolean>;

  UserName: WritableSignal<string> = signal('');
  passWord: WritableSignal<string> = signal('');
  authService = inject(UserService);
  userState = inject(UserStateService);


  closeModal() {
    this.showModalProperty.set(false);
  }
  showModal() {
    this.showModalProperty.set(true);
  }

  MapeoUser(data:UserModel[]| undefined,token:string) {
    if (data && data.length > 0) {
      for (const user of data) {
        const customUser: CustomUserProfile = {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          Token: token
        };
        this.userState.Login(customUser);
      }

    } else {
      console.error('No se encontraron datos de usuario válidos');
    }

  }

  onSubmit(event: Event) {
    event.preventDefault();
    const username = this.UserName();
    const password = this.passWord();
    this.authService.login({ userName: username, password }).subscribe({
      next: (result) => {
        this.MapeoUser(result.data, result?.token ?? '');
        this.authService.saveToken(result?.token ?? '');
        this.closeModal();
      },
      error: (err) => {
        // Maneja el error (mostrar mensaje, etc.)
        console.error('Error de login', err);
      }
    });
  }
}
