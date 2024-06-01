import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desgnition',
  templateUrl: './desgnition.component.html',
  styleUrls: ['./desgnition.component.scss']
})
export class DesgnitionComponent {

  addDesignitionForm = new FormGroup({
    name :  new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required])
  });

  submit(){
    let addDesignitionFormStore = this.addDesignitionForm.value;
    console.log(addDesignitionFormStore);
  }

}
