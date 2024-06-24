import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {

  addSubCategoryForm = new FormGroup({
    categoryName:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required])
})

submit(){
  let addCategoryStore=this.addSubCategoryForm.value;
  console.log(addCategoryStore)
}

}
