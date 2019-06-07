import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ItemCategory } from 'src/app/models/itemCategory';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UnirversityCareerService } from 'src/app/services/unirversity-career.service';
import { Content } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  listTypeEvent: ItemCategory[] = [];
  listAcademicPeriod: ItemCategory[] = [];
  listContent: Content[] = [];
  listItemUniversityCareer: ItemCategory[] = [];
  contentForm: FormGroup;
  constructor(
    private universityCareerService: UnirversityCareerService,
    private contentService : ContentService
  ) {
    this.contentForm = this.createFormGroup();
   }
       //Update UniversityCareer
       updateListItemUniversityCategories() {
        this.universityCareerService.getUniversityCareer().subscribe(itemCategories => {
          this.listItemUniversityCareer = itemCategories;
        });
      }
      //Update Type Event
      updateListTypeEvent() {
        this.universityCareerService.getTypeEvent().subscribe(itemCategories => {
          this.listTypeEvent = itemCategories;
        });
      }
      //Update Academic Period
      updateListAcademicPeriod() {
        this.universityCareerService.getAcademicPeriod().subscribe(itemCategories => {
          this.listAcademicPeriod = itemCategories;
        });
      }
      //Update content
      updateListContent() {
        this.contentService.getContent().subscribe(content => {
          this.listContent = content
        },
          error => {
            alert(JSON.stringify(error));
          }
        );
      }
//Delete
deleteContent(id: number) {
  this.contentService.deleteContent(id).subscribe(persons => {
    this.updateListContent();
  },
    error => {
      alert(JSON.stringify(error));
    })
}
//Update
updateContent(id: number) {
  alert(JSON.stringify(this.contentForm.valueChanges));
}
  ngOnInit() {
    this.updateListAcademicPeriod();
    this.updateListContent();
    this.updateListItemUniversityCategories();
    this.updateListTypeEvent();
  }
  //columns table
  displayedColumns: string[] = ['title','description','type_event','create_time','update_time','academic_period','universitycareer','delete','update'];
   //FORM ACTIONS
  //Create new form
  createFormGroup() {
    return new FormGroup({
      content_id: new FormControl(),
      title:new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),

      type_event: new FormControl('', [
        Validators.required,
      ]),

      create_time: new FormControl('', [
        Validators.required,
      ]),
      update_time: new FormControl('', [
        Validators.required,
      ]),
      
      academic_period: new FormControl('', [
        Validators.required,
      ]),

       content_universitycareer: new FormControl('', [
        Validators.required,
      ]),
    });
    
  }
   //Load data in form
   loadData(contentEdit: Content) {
    this.contentForm.setValue({
      content_id:contentEdit.content_id,
      title: contentEdit.title,
      description: contentEdit.description,
    
      type_event: contentEdit.type_event,
      academic_period:contentEdit.academic_period,
      content_universitycareer  : contentEdit.content_universitycareer
    })
  }
    //submit form
    submitForm() {
      if (this.contentForm.value.content_id == null) {
        if (this.contentForm.valid) {
          this.contentService.createContent(this.contentForm.value).subscribe(content => {
            this.updateListContent();
          }, error => {
            alert(JSON.stringify(error));
          })
          this.resetForm();
        }
      }
      else {
        if (this.contentForm.valid) {
          this.contentService.updateContent(this.contentForm.value).subscribe(content => {
            this.updateListContent();
          })
          this.resetForm();
        }
      }
    }
     //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.contentForm.reset({ active: false });
    this.contentForm.markAsUntouched();
    Object.keys(this.contentForm.controls).forEach((nameControl) => {
      control = this.contentForm.controls[nameControl];
      control.setErrors(null);
    });
  }
}
