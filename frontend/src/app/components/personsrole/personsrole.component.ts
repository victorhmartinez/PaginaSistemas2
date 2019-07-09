import { Component, OnInit, ViewChild } from '@angular/core';
//Services
import { PersonsRoleService  } from '../../services/persons-role.service';
import { ItemCategoryService } from '../../services/itemCategory.service';
import { PersonService  } from '../../services/person.service';

//Models
import { Person } from '../../models/person';
import { ItemCategory } from '../../models/itemCategory';
import { PersonsRole } from '../../models/personsRole';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ItemCategoryRoleService } from 'src/app/services/itemCategoryRole.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-personsrole',
  templateUrl: './personsrole.component.html',
  styleUrls: ['./personsrole.component.css']
})
export class PersonsroleComponent implements OnInit {

  listPersons: Person[] = [];
  listItemCategories: ItemCategory[] = [];
  listPersonsRole: PersonsRole[] = [];
  listCategoryRole: PersonsRole[] = [];
  personsRoleForm: FormGroup;
  data:MatTableDataSource<any>;

  constructor(
    private personsRoleService: PersonsRoleService ,
    private personService: PersonService,
    private itemCategoryRolService: ItemCategoryRoleService,
  ) {
    this.personsRoleForm = this.createFormGroup();
   }
   @ViewChild(MatPaginator) paginator: MatPaginator; 
  
  //Persons and Categories
  updateListPersons() {
    this.personService.getPersons().subscribe(person => {
      this.listPersons = person;
    });
  }

  updateListItemROLCategories() {
    this.itemCategoryRolService.getPersonsRole().subscribe(itemCategories => {
      this.listCategoryRole = itemCategories;
    });
  }

  //All 
  updateListPersonsRole() {
    this.personsRoleService.getPersonsRole().subscribe(personsRole => {
      this.listPersonsRole = personsRole
      this.data= new MatTableDataSource<PersonsRole>(this.listPersonsRole);
      this.data.paginator=this.paginator;
    },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }
//Filter the table
applyFilter(filterValue: string) {
  this.data.filter = filterValue.trim().toLowerCase();
}
  deletePersonsRole(id: number) {
    this.personsRoleService.deletePersonsRole(id).subscribe(persons => {
      this.updateListPersonsRole();
    },
      error => {
        alert(JSON.stringify(error));
      })

  }

  updatePersonsRole(id: number) {
    alert(JSON.stringify(this.personsRoleForm.valueChanges));
  }

  ngOnInit() {
    this.updateListPersons();
    this.updateListItemROLCategories();
    this.updateListPersonsRole();
  }

  displayedColumns: string[] = ['person', 'itemCategory', 'delete', 'update'];

  createFormGroup() {
    return new FormGroup({
      persons_role_id: new FormControl(),
      persons_id: new FormControl('', [
        Validators.required,
      ]),
      item_category_id: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  //Load data in form
  loadData(personsRoleEdit: PersonsRole) {
    this.personsRoleForm.setValue({
      persons_role_id: personsRoleEdit.persons_role_id,
      persons_id : personsRoleEdit.persons_id,
      item_category_id: personsRoleEdit.item_category_id,

    })
  }

  //submit form
  submitForm() {
    if (this.personsRoleForm.value.persons_role_id == null) {
      if (this.personsRoleForm.valid) {
        this.personsRoleService.createPersonsRole(this.personsRoleForm.value).subscribe(roleṔerson => {
          this.updateListPersonsRole();
        }, error => {
          alert(JSON.stringify(error));
        })
        this.resetForm();
      }
    }
    else {
      if (this.personsRoleForm.valid) {
        this.personsRoleService.updatePersonsRole(this.personsRoleForm.value).subscribe(rolePerson => {
          this.updateListPersonsRole();
        })
        this.resetForm();
      }
    }
  }

  //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.personsRoleForm.reset({ active: false });
    this.personsRoleForm.markAsUntouched();
    Object.keys(this.personsRoleForm.controls).forEach((nameControl) => {control = this.personsRoleForm.controls[nameControl];
      control.setErrors(null);
    });
  }
}
