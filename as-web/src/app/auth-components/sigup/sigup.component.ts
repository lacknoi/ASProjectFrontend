import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {
  signupForm: FormGroup;

  constructor(private service: AuthService
              , private formBuilder: FormBuilder){

      this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  onRegister(){
    this.service.signup(this.signupForm.value).subscribe((res) => {
      console.log(res);
    }); 
  }
}
