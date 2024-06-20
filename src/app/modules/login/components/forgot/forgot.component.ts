import { Component } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../../login.service";
import { ToastrService } from 'ngx-toastr';
import { ApplicationContextService} from "../../../../shared/services/application-context.service";
import { ApplicationContext } from "../../../../shared/models/application-context.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {

  loginGroup = new FormGroup({

    email : new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
    phoneNumber : new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    // password : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])

  });



  applicationContextObj = new ApplicationContext();



  constructor(private loginServiceObj : LoginService ,
              // private toastr : ToastrService ,
              private applicationContextServiceObj : ApplicationContextService,
              private routerObj : Router
            ){

    

  }

  login(){
    let dataOne =this.loginGroup.value;
    console.log(typeof(dataOne));
    console.log(dataOne);
    console.log(dataOne.email);
    //console.log(dataOne.password);
    let loginStatus={"email":dataOne.email,
      //"password":dataOne.password
    };
    this.loginServiceObj.login(loginStatus).subscribe(
      (res : any) =>{
        console.log(res);
        //this.toastr.success('loginSuccess', 'Success');
        this.applicationContextObj.loginStatus=true;
        this.applicationContextServiceObj.updateApplicationContext(this.applicationContextObj);
        this.routerObj.navigate(['/home']);
      },
      (error : any)=>{
        console.log(error);
        //this.toastr.error("loginFailed" , "Failed" );
      }
    );
  }


}
