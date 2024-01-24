import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-qna',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './profile-qna.component.html',
  styleUrl: './profile-qna.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileQnaComponent implements OnInit{

  qnaFormGroup! : FormGroup;
  router = inject(Router);
  isValid = false;

  ngOnInit(): void {
      this.qnaFormGroup = new FormGroup({
        type : new FormControl(),
        contents : new FormControl('',[Validators.required])
      })
  }

  submit() {
    this.isValid = this.qnaFormGroup.valid;
    if(this.isValid){
      this.router.navigate(['/main/profile']);
    }
  }

}
