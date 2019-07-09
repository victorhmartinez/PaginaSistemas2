import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listCategories: Category[] = [];
  categoryForm: FormGroup;
  data:MatTableDataSource<any>;
  constructor(
    private categoryService: CategoryService

  ) {
    this.categoryForm = this.createFormGroup();
  }
    @ViewChild(MatPaginator) paginator: MatPaginator; 

  updateListCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.listCategories = categories;
      this.data= new MatTableDataSource<Category>(this.listCategories);
      this.data.paginator=this.paginator;
    })
    
  }
  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(categories => {
      this.updateListCategories();
    },
    
      error => {
        alert(JSON.stringify(error));
      })
    
  }
  

  ngOnInit() {
    this.updateListCategories();
    
    
  }

  displayedColumns: string[] = ['nameCategory', 'active', 'delete', 'update'];

  //FORM ACTIONS
  //Create new form
  createFormGroup() {
    return new FormGroup({
      idCategory: new FormControl(),
      nameCategory: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      active: new FormControl(false),
    });
  }

  //Load data in form
  loadData(categoryEdit: Category) {
    this.categoryForm.setValue({
      idCategory: categoryEdit.idCategory,
      nameCategory: categoryEdit.nameCategory,
      active: categoryEdit.active,
    })
  }

  //submit form
  submitForm() {
    if (this.categoryForm.value.idCategory == null) {
      if (this.categoryForm.valid) {
        this.categoryService.createCategory(this.categoryForm.value).subscribe(category => {
          this.updateListCategories();
        })
        this.resetForm();
      }
    } else {
      if (this.categoryForm.valid) {
        this.categoryService.updateCategory(this.categoryForm.value).subscribe(category => {
          this.updateListCategories();
        })
        this.resetForm();
      }
    }
  }

  //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.categoryForm.reset({ active: false });
    this.categoryForm.markAsUntouched();
    Object.keys(this.categoryForm.controls).forEach((nameControl) => {
      control = this.categoryForm.controls[nameControl];
      control.setErrors(null);
    });
  }
}    
