import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from "../../home.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements  AfterViewInit,OnInit{

  addAdminForm = new FormGroup({ 
    name : new FormControl('', [Validators.required]),
    phoneNumber : new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(30)]),
    password : new FormControl('',[Validators.required , Validators.minLength(6), Validators.maxLength(28)]),
    designition : new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required])
  });


  displayedColumns: string[] = ['id', 'name', 'PhoneNumber', 'email', 'password', 'status'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public getDesignition:any = [

  ];
  
  constructor(private homeServiceObj:HomeService){

  }

  submit(){
    let adminStore = this.addAdminForm.value;
    console.log(adminStore);
    let adminAdd={ "name":adminStore.name,
                    "PhoneNumber":adminStore.phoneNumber,
                    "role":"Admin",
                    "email":adminStore.email,
                    "password":adminStore.password,  
                    "designition":adminStore.designition,                  
                    "status":adminStore.status
                  };
    this.homeServiceObj.usersAddApi(adminAdd).subscribe(
      (res:any)=>{
        console.log(res);
      }
    );

    this.homeServiceObj.usersGetApi("Admin").subscribe(
      (res:any)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res);
      }
    );


  

  }



  ngOnInit(){
    this.homeServiceObj.usersGetApi("Admin").subscribe(
      (res:any)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res);
      }
    );

    this.homeServiceObj.designitionGetApi().subscribe(
      (res:any)=>{
        this.getDesignition=res;
        console.log(this.getDesignition);
      }
    );

  }
    


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
