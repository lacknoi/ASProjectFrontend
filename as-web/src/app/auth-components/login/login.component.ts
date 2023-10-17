import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private service: AuthService
    , private formBuilder: FormBuilder){
        this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
        });
    }

    onLogin() {
      this.service.login(this.loginForm.value).subscribe((res) => {
        console.log(res);
      }); 
    }
}
