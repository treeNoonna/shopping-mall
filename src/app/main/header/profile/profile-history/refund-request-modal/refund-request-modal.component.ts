import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-refund-request-modal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './refund-request-modal.component.html',
  styleUrl: './refund-request-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefundRequestModalComponent {

}
