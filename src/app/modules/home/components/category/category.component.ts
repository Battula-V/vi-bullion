import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';  
import { MatPaginator } from '@angular/material/paginator'; 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  addCategoryForm = new FormGroup({
    categoryName :  new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]) 
  });
  
  displayedColumns: string[] = ['id' ,'category', 'status' ];
  dataSource!:any;

  

  @ViewChild(MatPaginator) paginator! : MatPaginator;
   
  constructor( ){
     
  }

  submit(){
    let addDepartmentFormStore = this.addCategoryForm.value;
    console.log(addDepartmentFormStore);
    
  }

  ngOnInit(){    
  }  

  ngAfterViewInit() {
    this.paginator.pageSize=2;
    this.dataSource.paginator = this.paginator;
  }

}
