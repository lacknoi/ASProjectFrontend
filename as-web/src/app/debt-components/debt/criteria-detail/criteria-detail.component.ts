import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebtService } from 'src/app/services/debt-service/debt.service';

@Component({
  selector: 'app-criteria-detail',
  templateUrl: './criteria-detail.component.html',
  styleUrls: ['./criteria-detail.component.css']
})
export class CriteriaDetailComponent {
  criteriaId: any = this.activatedroute.snapshot.params['criteriaId'];

  constructor(private service: DebtService
              , private activatedroute: ActivatedRoute){}

  ngOnInit(){
    console.log('criteriaId : ' + this.criteriaId);

    this.service.getCriteriaById(this.criteriaId).subscribe((res) => {
      console.log(res);
    }); 
  }
}
