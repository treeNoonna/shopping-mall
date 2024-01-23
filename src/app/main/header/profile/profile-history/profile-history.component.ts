import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-history.component.html',
  styleUrl: './profile-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHistoryComponent {
}
