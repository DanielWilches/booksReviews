import { CurrentColor } from './../../../../../node_modules/lightningcss/node/ast.d';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { UserStateService } from '@Services/UserState.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './Header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  userState = inject(UserStateService);
  currentUser = this.userState.currentUser;

  @Input() openAuthModal!: () => void;
}
