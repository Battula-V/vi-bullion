import { Component, ViewChild } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from "../../home.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
 

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent {



  addSuperAdminForm = new FormGroup({ 
    name : new FormControl('', [Validators.required]),
    phoneNumber : new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(30)]),
    password : new FormControl('',[Validators.required , Validators.minLength(6), Validators.maxLength(28)]),
    designition : new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]) 
  });
  

  
  displayedColumns: string[] = ['id', 'name', 'phoneNumber', 'email', 'password', 'Status'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public getDesignition:any = [

  ];

  constructor(private homeServiceObj:HomeService){

  }

  submit(){
    let superAdminStore = this.addSuperAdminForm.value;
    console.log(superAdminStore);
    // this.homeServiceObj.superAdminAddApi({"name": superAdminStore.name, "phoneNumber":superAdminStore.phoneNumber,"email":superAdminStore.email, "password":superAdminStore.password, "Status":superAdminStore.status}).subscribe(
    //     (response:any)=>{
    //       console.log(response);
    //     }
    //   );
    let superAdminAdd={ "name":superAdminStore.name,
                        "PhoneNumber":superAdminStore.phoneNumber,
                        "role":"Super Admin",
                        "email":superAdminStore.email,
                        "password":superAdminStore.password,                        
                        "designition":superAdminStore.designition,       
                        "status":superAdminStore.status
                      };
    this.homeServiceObj.usersAddApi(superAdminAdd).subscribe(
        (res:any)=>{
          console.log(res);
        }
      );

    
      this.homeServiceObj.usersGetApi("Super Admin").subscribe(
        (res:any)=>{
          console.log(res);
          this.dataSource = new MatTableDataSource<any>(res);
        }
      );
  }

  ngOnInit(){
    // this.homeServiceObj.superAdminGetApi().subscribe(
    //   (response:any)=>{
    //     console.log(response);        
    //     this.dataSource = new MatTableDataSource<any>(response);
    //   }
    // );

    this.homeServiceObj.usersGetApi("Super Admin").subscribe(
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
