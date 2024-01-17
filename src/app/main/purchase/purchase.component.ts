import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseComponent {

}
