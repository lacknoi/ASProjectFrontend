import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { StorageService } from 'src/app/services/storage-service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private service: AuthService
              , private router: Router
              , private formBuilder: FormBuilder){
        this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
        });
    }

    onLogin() {
      this.service.login(this.loginForm.value).subscribe((res) => {
        console.log(res);

        if(res.data.token != null){
          const user = {
            username: res.data.username
          }

          StorageService.saveToken(res.data.token);
          StorageService.saveUser(user);

          this.router.navigateByUrl("dashboard");
        }else{
          console.log("Worng credentials");
        }
      }); 
    }
}
