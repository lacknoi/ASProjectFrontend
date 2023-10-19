import { Component } from '@angular/core';
import { DebtService } from 'src/app/services/debt-service/debt.service';

@Component({
  selector: 'app-criteria-list',
  templateUrl: './criteria-list.component.html',
  styleUrls: ['./criteria-list.component.css']
})
export class CriteriaListComponent {
  criterias: any = [];

  constructor(private service: DebtService){}

  ngOnInit(){
    this.getAllCriteria();
  }

  getAllCriteria(){
    this.criterias = [];
    this.service.getAllCriterias().subscribe((res) => {
      console.log(res);

      // this.criterias = res.data;
    }); 
  }
}
