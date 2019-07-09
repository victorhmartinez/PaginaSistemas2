import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from 'src/app/models/content';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ContentService } from 'src/app/services/content.service';
import { ContentInfoService } from 'src/app/services/content-info.service';
import { ContentInfo } from 'src/app/models/content-info';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.css']
})
export class ContentInfoComponent implements OnInit {
  listContent: Content[] = [];
  listContentInfo: ContentInfo[] = [];
  contentInfoForm: FormGroup;
  data:MatTableDataSource<any>;
  constructor(
    private contentService: ContentService ,
    private contentInfoService: ContentInfoService,
  ) { 
    this.contentInfoForm = this.createFormGroup();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator; 
 //Update list content
 updateListContent() {
  this.contentService.getContent().subscribe(content => {
    this.listContent = content;
  });

}
//all content Info
updateListContentInfo() {
  this.contentInfoService.getContentInfo().subscribe(contenInfo => {
    this.listContentInfo = contenInfo
    this.data= new MatTableDataSource<ContentInfo>(this.listContentInfo);
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
deleteContentInfo(id: number) {
  this.contentInfoService.deleteContentInfo(id).subscribe(contentIfo => {
    this.updateListContentInfo();
  },
    error => {
      alert(JSON.stringify(error));
    })
}
//Update
updateContentInfo(id: number) {
  alert(JSON.stringify(this.contentInfoForm.valueChanges));
}
  ngOnInit() {
  
    this.updateListContent();
    this.updateListContentInfo();

  }
   //columns table
   displayedColumns: string[] = ['date', 'place','link_fom', 'url' ,'content_id','delete','update'];
   //FormGroup
     createFormGroup() {
       return new FormGroup({
   
        content_info_id: new FormControl(),
        
         place: new FormControl('', [
           Validators.required,
         ]),
         link_form: new FormControl('', [
           Validators.required,
         ]),
         url: new FormControl('', [
          Validators.required,
        ]),
        content_content_id :new FormControl('', [
          Validators.required,
        ]),
       });
     }

//Load data in form
loadData(contentInfoEdit: ContentInfo) {
  this.contentInfoForm.setValue({
    content_info_id: contentInfoEdit.content_info_id,
    place: contentInfoEdit.place,
    link_form:contentInfoEdit.link_form,
    url: contentInfoEdit.url,
    content_content_id:contentInfoEdit.content_content_id,
    

  })
}
 //submit form
 submitForm() {
  if (this.contentInfoForm.value.content_info_id== null) {
    if (this.contentInfoForm.valid) {
      this.contentInfoService.createContentInfo(this.contentInfoForm.value).subscribe(contentInfo => {
        this.updateListContentInfo();
      }, error => {
        alert(JSON.stringify(error));
      })
      this.resetForm();
    }
  }
  else {
    if (this.contentInfoForm.valid) {
      this.contentInfoService.updateContentInfo(this.contentInfoForm.value).subscribe(contetInfo => {
        this.updateListContentInfo();
      })
      this.resetForm();
    }
  }
}
    //reset form
resetForm() {
let control: AbstractControl = null;
this.contentInfoForm.reset({ active: false });
this.contentInfoForm.markAsUntouched();
Object.keys(this.contentInfoForm.controls).forEach((nameControl) => {control = this.contentInfoForm.controls[nameControl];
control.setErrors(null);
});
}
}
