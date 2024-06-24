import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  addProductForm = new FormGroup({
    categoryName:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required])
})

submit(){
  let addProductFormStore=this.addProductForm.value;
  console.log(addProductFormStore)
}

}
