import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-qna',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-qna.component.html',
  styleUrl: './profile-qna.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileQnaComponent {

}
