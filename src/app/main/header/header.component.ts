import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userService = inject(UserService);
  isLoggedIn = this.userService.isLoggedin(); //javascript는 false가 아니면 다 true이다.

}
