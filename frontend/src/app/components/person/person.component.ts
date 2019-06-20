import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'second_name','first_last_name','second_last_name', 'delete', 'update'];
  
  listPersons: Person[] = [];
  personForm: FormGroup;
  data:MatTableDataSource<any>;
  constructor(
    private personServices: PersonService
  ) { 
    this.personForm = this.createFormGroup();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  updateListPersons() {
    this.personServices.getPersons().subscribe(person => {
      this.listPersons = person;
      this.data= new MatTableDataSource <Person>(this.listPersons);
      this.data.paginator= this.paginator;
    })
  }
  //Filter the table
  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
  }
  deletePersons(person_id: number) {
    this.personServices.deletePersons(person_id).subscribe(person => {
      this.updateListPersons();
    },
      error => {
        alert(JSON.stringify(error));
      })
   
  }

  ngOnInit() {
    this.updateListPersons();
  
    
  }

 //FORM ACTIONS
  //Create new form
  createFormGroup() {
    return new FormGroup({
      person_id: new FormControl(),
      first_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      second_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      first_last_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      second_last_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
   
    });
  }
   //Load data in form
   loadData(personsEdit: Person) {
    this.personForm.setValue({
      person_id : personsEdit.person_id,
      first_name: personsEdit.first_name,
      second_name: personsEdit.second_name,
      first_last_name:personsEdit.first_last_name,
      second_last_name:personsEdit.second_last_name
      
    })
  }
  //submit form

  submitForm() {
    if (this.personForm.value.person_id == null) {
      if (this.personForm.valid) {
        this.personServices.createPersons(this.personForm.value).subscribe(person => {
          this.updateListPersons();
        })
        this.resetForm();
      }
    }else{
      if (this.personForm.valid) {
        
        this.personServices.updatePersons(this.personForm.value).subscribe(person => {
          this.updateListPersons();
        })
        this.resetForm();
      }
    }

    
  }

  //reset form
 
  resetForm() {
    let control: AbstractControl = null;
    this.personForm.reset({ active: false });
    this.personForm.markAsUntouched();
    Object.keys(this.personForm.controls).forEach((nameControl) => {
      control = this.personForm.controls[nameControl];
      control.setErrors(null);
      
    });
   
  }
}