import { Component, OnInit } from '@angular/core';
//Services
import { PersonsRoleService  } from '../../services/persons-role.service';
import { ItemCategoryService } from '../../services/itemCategory.service';
import { PersonService  } from '../../services/person.service';
import { ItemCategoryRoleService  } from '../../services/itemCategoryRole.service';

//Models
import { Person } from '../../models/person';
import { ItemCategory } from '../../models/itemCategory';
import { PersonsRole } from '../../models/personsRole';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

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

  constructor(
    private personsRoleService: PersonsRoleService ,
    private personService: PersonService,
    private itemCategoryService: ItemCategoryService,
    private itemCategoryRolService : ItemCategoryRoleService
  ) {
    this.personsRoleForm = this.createFormGroup();
   }
  
  //Persons and Categories
  updateListPersons() {
    this.personService.getPersons().subscribe(person => {
      this.listPersons = person;
    });
  }

  updateListItemCategories() {
    this.itemCategoryRolService.getPersonsRole().subscribe(itemCategories => {
      this.listCategoryRole = itemCategories;
    });
  }

  //All 
  updateListPersonsRole() {
    this.personsRoleService.getPersonsRole().subscribe(personsRole => {
      this.listPersonsRole = personsRole
    },
      error => {
        alert(JSON.stringify(error));
      }
    );
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
    this.updateListItemCategories();
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
