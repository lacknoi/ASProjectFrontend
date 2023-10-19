import { Component } from '@angular/core';
import { MobileService } from 'src/app/services/profile-service/mobile.service';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent {
  mobiles: any = [];

  constructor(private service: MobileService){}

  ngOnInit(){
    this.getAllMobile();
  }

  getAllMobile(){
    this.mobiles = [];
    this.service.getAllMobile().subscribe((res) => {
      console.log(res);

      this.mobiles = res.data;
    }); 
  }
}
