import { ChangeDetectionStrategy, Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { UserService } from '@Services/User.service';

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

  closeModal() {
    this.showModalProperty.set(false);
  }
  showModal() {
    this.showModalProperty.set(true);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const username = this.UserName();
    const password = this.passWord();
    this.authService.login({ userName: username, password }).subscribe({
      next: (result) => {
      console.log('Login exitoso', result);
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
