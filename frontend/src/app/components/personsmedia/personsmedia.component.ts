import { Component, OnInit, ViewChild } from '@angular/core';
//Services
import { PersonsMediaService  } from '../../services/personsMedia.service';
import { ItemCategoryService } from '../../services/itemCategory.service';
import { PersonService  } from '../../services/person.service';

//Models
import { Person } from '../../models/person';
import { ItemCategory } from '../../models/itemCategory';
import { PersonsMedia } from '../../models/personsMedia';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-personsmedia',
  templateUrl: './personsmedia.component.html',
  styleUrls: ['./personsmedia.component.css']
})
export class PersonsmediaComponent implements OnInit {

  listPersons: Person[] = [];
  listItemCategories: ItemCategory[] = [];
  listPersonsMedia: PersonsMedia[] = [];
  personsMediaForm: FormGroup;
  data:MatTableDataSource<any>;

  constructor(
    private personsMediaService: PersonsMediaService ,
    private personService: PersonService,
    private itemCategoryService: ItemCategoryService,
  ) {
    this.personsMediaForm = this.createFormGroup();
   }
   @ViewChild(MatPaginator) paginator: MatPaginator; 
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

   //All 
   updateListPersonsMedia() {
    this.personsMediaService.getPersonsMedia().subscribe(personsMedia => {
      this.listPersonsMedia = personsMedia
      this.data= new MatTableDataSource<PersonsMedia>(this.listPersonsMedia);
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
  deletePersonsMedia(id: number) {
    this.personsMediaService.deletePersonsMedia(id).subscribe(persons => {
      this.updateListPersonsMedia();
    },
      error => {
        alert(JSON.stringify(error));
      })

  }

  updatePersonsMedia(id: number) {
    alert(JSON.stringify(this.personsMediaForm.valueChanges));
  }

  ngOnInit() {
    this.updateListPersons();
    this.updateListItemCategories();
    this.updateListPersonsMedia();
  
  }

  displayedColumns: string[] = ['path', 'person', 'itemCategory', 'delete', 'update'];

  createFormGroup() {
    return new FormGroup({
      persons_media_id: new FormControl(),
      path: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      item_category_id: new FormControl('', [
        Validators.required,
      ]),
      persons_id: new FormControl('', [
        Validators.required,
      ]), 
    });
  }

  //Load data in form
  loadData(personsMediaEdit: PersonsMedia) {
    this.personsMediaForm.setValue({
      persons_media_id: personsMediaEdit.persons_media_id,
      path: personsMediaEdit.path,
      persons_id : personsMediaEdit.persons_id,
      item_category_id: personsMediaEdit.item_category_id,

    })
  }

  //submit form
  submitForm() {
    if (this.personsMediaForm.value.persons_media_id == null) {
      if (this.personsMediaForm.valid) {
        this.personsMediaService.createPersonsMedia(this.personsMediaForm.value).subscribe(mediaPerson => {
          this.updateListPersonsMedia();
        }, error => {
          alert(JSON.stringify(error));
        })
        this.resetForm();
      }
    }
    else {
      if (this.personsMediaForm.valid) {
        this.personsMediaService.updatePersonsMedia(this.personsMediaForm.value).subscribe(mediaPerson => {
          this.updateListPersonsMedia();
        })
        this.resetForm();
      }
    }
  }

  //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.personsMediaForm.reset({ active: false });
    this.personsMediaForm.markAsUntouched();
    Object.keys(this.personsMediaForm.controls).forEach((nameControl) => {control = this.personsMediaForm.controls[nameControl];
      control.setErrors(null);
    });
  }
}
