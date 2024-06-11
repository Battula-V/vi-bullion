import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from "../../home.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-desgnition',
  templateUrl: './desgnition.component.html',
  styleUrls: ['./desgnition.component.scss']
})
export class DesgnitionComponent implements AfterViewInit,OnInit{

  addDesignitionForm = new FormGroup({
    name :  new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required])
  });

  displayedColumns: string[] = ['id' ,'designition', 'Status' ];
  dataSource!:any;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
   
  constructor(private homeServiceObj : HomeService){
     
  }

  submit(){
    let addDesignitionFormStore = this.addDesignitionForm.value;
    console.log(addDesignitionFormStore);
    let desgnitionAdd={
                        "designition":addDesignitionFormStore.name,
                        "Status":addDesignitionFormStore.status    
                      };
    this.homeServiceObj.designitionAddApi(desgnitionAdd).subscribe(
      (res:any)=>{
        console.log(res);
      }
    );

  }

  ngOnInit(){   
    this.homeServiceObj.designitionGetApi().subscribe(
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

 