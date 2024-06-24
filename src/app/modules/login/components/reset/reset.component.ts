import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  loginGroup = new FormGroup({
    email : new FormControl('',[Validators.required , Validators.email , Validators.maxLength(30)]),
    password : new FormControl('',[Validators.required , Validators.minLength(6) , Validators.maxLength(10)]),
    conformpassword : new FormControl('',[Validators.required , Validators.minLength(6) , Validators.maxLength(10)])
  });


  login(){
    console.log(this.loginGroup.value);
  }


}
