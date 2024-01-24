import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { debounceTime, tap } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);
  userService = inject(UserService); //register 끝나면 등록해야 하니까 필요(db없으니까 로그인만 시켜줌)


  registerFormGroup! : FormGroup;
  isValid = false;

  ngOnInit(): void {
   this.registerFormGroup = new FormGroup({
      email: new FormControl('',{validators: [Validators.required, Validators.email]}),
      password: new FormControl('',{validators : [Validators.required]}),
      passwordConfirm: new FormControl('',{validators : [Validators.required]})
    });


    this.registerFormGroup.valueChanges.pipe(
      debounceTime(200),
      tap(value => {
      if(this.registerFormGroup.valid && value.password === value.passwordConfirm) {
        this.isValid = true;
      }
      else{
        this.isValid = false;
      }
    })
    ).subscribe();
  }

    get emailControl() { return this.registerFormGroup.get('email');}
    get passwordControl() { return this.registerFormGroup.get('email');}


  submit(e:any){
    if(this.isValid){
      this.userService.setUser(this.emailControl?.value, this.passwordControl?.value);
      this.router.navigateByUrl('/main');
    } //confirm 안맞으면 submit 안됨
  }
}
