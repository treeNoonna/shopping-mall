import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[ RouterModule ]
})
export class AppComponent {
  title = 'shopping-mall';

  userService = inject(UserService);
  isLoggedIn = this.userService.isLoggedin();

}
