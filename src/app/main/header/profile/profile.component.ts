import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent  {

  activateRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  router = inject(Router);


  logout(e:MouseEvent){
/*     e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation(); */

    console.log(e,'tree');
    this.userService.logout();
    this.router.navigate(['./login']);
  }

}
