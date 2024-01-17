import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditComponent {

}
