import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../../service/user.service';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule, NgIf
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditComponent {
  userService = inject(UserService);
  router = inject(Router);

  password = new FormControl('', [Validators.required]);
  newPassword = new FormControl('', [Validators.required]);
  newPasswordConfirm = new FormControl('', [Validators.required]);

  isValid = false;
  user = this.userService.user;

  submit(){
    if(
      this.password.value === this.user?.password &&
      this.newPassword.value?.length &&
      this.newPassword.value === this.newPasswordConfirm.value)
      {
        this.isValid = true;
        this.userService.setUser(this.user.email, this.newPassword.value);
        this.router.navigate(['/main/profile']);
      }
      //안되면 error 처리
  }

}
