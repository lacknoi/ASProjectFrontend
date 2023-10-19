import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage-service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'as-web';

  isLogin: boolean = StorageService.isLogin();

  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe(event => {
       if(event.constructor.name === "NavigationEnd"){
          this.isLogin = StorageService.isLogin();

          console.log('this.isLogin : ' + this.isLogin);
       }
    })
  }
}
