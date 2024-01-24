import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { debounceTime, tap } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  router = inject(Router);
  userService = inject(UserService);
  fb = inject(FormBuilder);

  loginFormGroup! : FormGroup;
  isValid = false;

  copy = new FormControl('');

  formGroup! : FormGroup;
  inputs! : FormArray;

  ngOnInit(): void {
   this.loginFormGroup = new FormGroup({
      email: new FormControl('',{validators: [Validators.required, Validators.email]}),
      password: new FormControl('',{validators : [Validators.required]})
    });


    this.loginFormGroup.valueChanges.pipe(
      debounceTime(200),
      tap(value => {
        console.log(value)
      })
    ).subscribe();


  this.formGroup = new FormGroup({
    inputs: this.fb.array([])
  });

}


get emailControl() { return this.loginFormGroup.get('email');}
get passwordControl() { return this.loginFormGroup.get('email');}


  submit(e:any){
    //console.log(this.loginFormGroup);

    if(this.loginFormGroup.valid){
      this.userService.setUser(this.emailControl?.value, this.passwordControl?.value);
      this.router.navigateByUrl('/main');
    }
  }



}
