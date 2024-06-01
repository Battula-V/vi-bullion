import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { HomeService } from "../../home.service";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {

  addDepartmentForm = new FormGroup({
    departmentName :  new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]) 
  });
  
   
  constructor(private homeServiceObj : HomeService){
     
  }

  submit(){
    let addDepartmentFormStore = this.addDepartmentForm.value;
    console.log(addDepartmentFormStore);
  }

  ngOnInit(){
    this.homeServiceObj.departmentAddApi({"department":"Finance","Status":"inactive"}).subscribe(
      (response:any)=>{
        console.log(response); 
      }
    );


    


  }

}
