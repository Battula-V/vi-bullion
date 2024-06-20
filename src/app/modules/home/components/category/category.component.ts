import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { HomeService } from "../../home.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  addDepartmentForm = new FormGroup({
    departmentName :  new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]) 
  });
  
  displayedColumns: string[] = ['id' ,'department', 'Status' ];
  dataSource!:any;

  

  @ViewChild(MatPaginator) paginator! : MatPaginator;
   
  constructor(private homeServiceObj : HomeService){
     
  }

  submit(){
    let addDepartmentFormStore = this.addDepartmentForm.value;
    console.log(addDepartmentFormStore);
    let departmentAdd={"department":addDepartmentFormStore.departmentName,
                       "Status":addDepartmentFormStore.status
                      };
    this.homeServiceObj.departmentAddApi(departmentAdd).subscribe(
      (response:any)=>{
        console.log(response); 
      }
       
    );
  }

  ngOnInit(){   
    this.homeServiceObj.departmentGetApi().subscribe(
      (response:any)=>{
        console.log(response);
        this.dataSource = new MatTableDataSource<any>(response);
      }
    );

  }  

  ngAfterViewInit() {
    this.paginator.pageSize=2;
    this.dataSource.paginator = this.paginator;
  }

}
