import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectMatter } from 'src/app/models/subject-matter';
import { PreRequirements } from 'src/app/models/pre-requirements';
import { PreRequirementsService } from 'src/app/services/pre-requirements.service';
import { SubjectMatterService } from 'src/app/services/subjectMatter.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-pre-requirements',
  templateUrl: './pre-requirements.component.html',
  styleUrls: ['./pre-requirements.component.css']
})
export class PreRequirementsComponent implements OnInit {
listSubjectMatter : SubjectMatter[] = [];
listSubjectMatterRequirements: SubjectMatter [] = [];
listPreRequirements : PreRequirements [] = [];
preRequirementsForm: FormGroup
data:MatTableDataSource<any>;
  constructor(
    private SubjectMatterService: SubjectMatterService,
  private PreRequirementsService : PreRequirementsService
  ) {
    this.preRequirementsForm = this.createFormGroup();
   }
   @ViewChild(MatPaginator) paginator: MatPaginator; 
    //SubjectMatter
    updateListSubjectMatter() {
      this.SubjectMatterService.getSubjectMatter().subscribe(subjectMatter => {
        this.listSubjectMatter = subjectMatter;
      });
    }
    //subjectMatterRequirements
    updateListSubjectMatterRequirements() {
      this.SubjectMatterService.getSubjectMatter().subscribe(subjectMatter => {
        this.listSubjectMatterRequirements = subjectMatter;
      });
    }
    //all preRequirements
    updateListPreRequirements() {
      this.PreRequirementsService.getpreRequirements().subscribe(preRequirement => {
        this.listPreRequirements = preRequirement;
        this.data= new MatTableDataSource<PreRequirements>(this.listPreRequirements);
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
  //Delete
  deletepreRequirements(id: number) {
    this.PreRequirementsService.deletepreRequirements(id).subscribe(preRequirement => {
      this.updateListPreRequirements();
    },
      error => {
        alert(JSON.stringify(error));
      })
  }
  //Update
  updatepreRequirements(id: number) {
    alert(JSON.stringify(this.preRequirementsForm.valueChanges));
  }
  ngOnInit() {
    this.updateListPreRequirements();
    this.updateListSubjectMatter();
    this.updateListSubjectMatterRequirements();
  }
 //columns table
 displayedColumns: string[] = ['SubjectMatter', 'SubjectMatter_Requirement', 'delete', 'update'];
 //FormGroup
   createFormGroup() {
     return new FormGroup({
 
      pre_requirements_id: new FormControl(),
      subject_matter_id_id: new FormControl('', [
         Validators.required,
       ]),
       subject_matter_requeriment_id: new FormControl('', [
         Validators.required,
       ]),
     });
   }
     //Load data in form
     loadData(preRequirementEdit: PreRequirements) {
      this.preRequirementsForm.setValue({
        pre_requirements_id: preRequirementEdit.pre_requirements_id,
        subject_matter_id_id : preRequirementEdit.subject_matter_id_id,
        subject_matter_requeriment_id: preRequirementEdit.subject_matter_requeriment_id,
  
      })
    }
    //submit form
    submitForm() {
      if (this.preRequirementsForm.value.pre_requirements_id == null) {
        if (this.preRequirementsForm.valid) {
          this.PreRequirementsService.createpreRequirements(this.preRequirementsForm.value).subscribe(preRequirement => {
            this.updateListPreRequirements();
          }, error => {
            alert(JSON.stringify(error));
          })
          this.resetForm();
        }
      }
      else {
        if (this.preRequirementsForm.valid) {
          this.PreRequirementsService.updatepreRequirements(this.preRequirementsForm.value).subscribe(preRequirement => {
            this.updateListPreRequirements();
          })
          this.resetForm();
        }
      }
    }
    //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.preRequirementsForm.reset({ active: false });
    this.preRequirementsForm.markAsUntouched();
    Object.keys(this.preRequirementsForm.controls).forEach((nameControl) => {control = this.preRequirementsForm.controls[nameControl];
      control.setErrors(null);
    });
  }
}
