import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './Header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
