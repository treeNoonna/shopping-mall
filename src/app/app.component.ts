import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[ RouterModule, NgIf]
})
export class AppComponent {
  title = 'shopping-mall';

  userService = inject(UserService);
  isLoggedIn = this.userService.isLoggedin();

}
