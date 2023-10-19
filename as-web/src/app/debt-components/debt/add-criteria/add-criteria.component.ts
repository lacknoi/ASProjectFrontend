import { Component } from '@angular/core';
import { DebtService } from 'src/app/services/debt-service/debt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-criteria',
  templateUrl: './add-criteria.component.html',
  styleUrls: ['./add-criteria.component.css']
})
export class AddCriteriaComponent {
  criteriaForm: FormGroup;

  constructor(private service: DebtService
            , private formBuilder: FormBuilder){
      this.criteriaForm = this.formBuilder.group({
        modeId: ['', Validators.required],
        description: ['', Validators.required],
        debtMnyFrom: ['', Validators.required],
        debtMnyTo: ['', Validators.required]
      });
  }

  onCreateCriteria(){
    this.service.createCriteria(this.criteriaForm.value).subscribe((res) => {
      console.log(res);
    }); 
  }
}
