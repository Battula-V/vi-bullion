import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  addCategoryForm = new FormGroup({
      categoryName:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required])
  })

  submit(){
    let addCategoryStore=this.addCategoryForm.value;
    console.log(addCategoryStore)
  }

}
