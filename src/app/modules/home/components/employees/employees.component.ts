import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from "../../home.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements AfterViewInit,OnInit{

  addEmployeeForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    phoneNumber : new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(30)]),
    password : new FormControl('',[Validators.required , Validators.minLength(6), Validators.maxLength(28)]),
    designation : new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]) 
  });

  displayedColumns: string[] = ['id', 'name', 'phoneNumber', 'email','password','designation','Status'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private homeServiceObj:HomeService){

  }

  submit(){
    let addEmployeeFormStore = this.addEmployeeForm.value;
    console.log(addEmployeeFormStore); 
    let employeeAdd={ "name":addEmployeeFormStore.name,
                    "PhoneNumber":addEmployeeFormStore.phoneNumber,
                    "role":"Employee",
                    "email":addEmployeeFormStore.email,
                    "password":addEmployeeFormStore.password, 
                    "designation":addEmployeeFormStore.designation,                  
                    "status":addEmployeeFormStore.status
                  };
    this.homeServiceObj.usersAddApi(employeeAdd).subscribe(
      (response:any)=>{
        console.log(response);
      }
    );
  }


  ngOnInit(){
    this.homeServiceObj.usersGetApi("Employee").subscribe(
      (response:any)=>{
        console.log(response);
        this.dataSource = new MatTableDataSource<any>(response);
      }
    );
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
