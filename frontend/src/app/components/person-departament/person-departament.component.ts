import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ItemCategory } from 'src/app/models/itemCategory';
import { PersonDepartament } from 'src/app/models/person-departament';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ItemCategoryService } from 'src/app/services/itemCategory.service';
import { PersonService } from 'src/app/services/person.service';
import { PersonDepartamentService } from 'src/app/services/person-departament.service';
import { UnirversityCareerService } from 'src/app/services/unirversity-career.service';

@Component({
  selector: 'app-person-departament',
  templateUrl: './person-departament.component.html',
  styleUrls: ['./person-departament.component.css']
})
export class PersonDepartamentComponent implements OnInit {
  listPersons: Person[] = [];
  listItemCategories: ItemCategory[] = [];
  listPersonsDepartament: PersonDepartament [] = [];
  listItemUniversityCareer: ItemCategory[] = [];
  personsDepartamentform: FormGroup;
  constructor(
    private personsDepartamentService: PersonDepartamentService ,
    private personService: PersonService,
    private itemCategoryService: ItemCategoryService,
    private universityCareerService: UnirversityCareerService
  ) { 
    this.personsDepartamentform = this.createFormGroup();
  }
    //Persons and Categories
    updateListPersons() {
      this.personService.getPersons().subscribe(person => {
        this.listPersons = person;
      });
    }

    updateListItemCategories() {
      this.itemCategoryService.getItemCategories().subscribe(itemCategories => {
        this.listItemCategories = itemCategories;
      });
    }
    //Update UniversityCareer
    updateListItemUniversityCategories() {
      this.universityCareerService.getUniversityCareer().subscribe(itemCategories => {
        this.listItemUniversityCareer = itemCategories;
      });
    }
    //all person,itemcategories,contacts
    updateListPersonsDepartament() {
      this.personsDepartamentService.getPersonsDepartament().subscribe(personsContact => {
        this.listPersonsDepartament = personsContact
      },
        error => {
          alert(JSON.stringify(error));
        }
      );
    }
//Delete
deletePersonsDepartment(id: number) {
  this.personsDepartamentService.deletePersonsDepartament(id).subscribe(persons => {
    this.updateListPersonsDepartament();
  },
    error => {
      alert(JSON.stringify(error));
    })
}
//Update
updatePersonsDepartment(id: number) {
  alert(JSON.stringify(this.personsDepartamentform.valueChanges));
}
  ngOnInit() {
    this.updateListPersons();
    this.updateListItemCategories();
    this.updateListItemUniversityCategories();
    this.updateListPersonsDepartament();
  }
  //columns table
  displayedColumns: string[] = ['person', 'itemCategory','universityCareer', 'delete', 'update'];
//FormGroup
  createFormGroup() {
    return new FormGroup({

      persons_departaments_id: new FormControl(),
      persons_id: new FormControl('', [
        Validators.required,
      ]),
      item_category_id: new FormControl('', [
        Validators.required,
      ]),
      universitycareer: new FormControl('', [
        Validators.required,
      ]),
    });
  }
     //Load data in form
     loadData(personsDepartamentEdit: PersonDepartament) {
      this.personsDepartamentform.setValue({
        persons_departaments_id: personsDepartamentEdit.persons_departaments_id,
        persons_id : personsDepartamentEdit.persons_id,
        item_category_id: personsDepartamentEdit.item_category_id,
        universitycareer:personsDepartamentEdit.universitycareer
  
      })
    }
       //submit form
       submitForm() {
        if (this.personsDepartamentform.value.persons_departaments_id== null) {
          if (this.personsDepartamentform.valid) {
            this.personsDepartamentService.createpersonsDepartament(this.personsDepartamentform.value).subscribe(personContact => {
              this.updateListPersonsDepartament();
            }, error => {
              alert(JSON.stringify(error));
            })
            this.resetForm();
          }
        }
        else {
          if (this.personsDepartamentform.valid) {
            this.personsDepartamentService.updatePersonsDepartament(this.personsDepartamentform.value).subscribe(personContact => {
              this.updateListPersonsDepartament();
            })
            this.resetForm();
          }
        }
      }
          //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.personsDepartamentform.reset({ active: false });
    this.personsDepartamentform.markAsUntouched();
    Object.keys(this.personsDepartamentform.controls).forEach((nameControl) => {control = this.personsDepartamentform.controls[nameControl];
      control.setErrors(null);
    });
  }
}
