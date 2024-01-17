import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-confirm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-confirm.component.html',
  styleUrl: './profile-confirm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileConfirmComponent {

}
