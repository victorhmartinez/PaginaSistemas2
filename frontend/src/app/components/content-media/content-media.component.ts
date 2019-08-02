import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemCategory } from 'src/app/models/itemCategory';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Content } from 'src/app/models/content';
import { ContentMedia } from 'src/app/models/content-media';
import { ItemCategoryService } from 'src/app/services/itemCategory.service';
import { ContentService } from 'src/app/services/content.service';
import { ContentMediaService } from 'src/app/services/content-media.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-content-media',
  templateUrl: './content-media.component.html',
  styleUrls: ['./content-media.component.css']
})
export class ContentMediaComponent implements OnInit {
  
  listItemCategories: ItemCategory[] = [];
  listContent: Content[] = [];
  listContentMedia: ContentMedia[] = [];
  contentMediaForm: FormGroup;
  data:MatTableDataSource<any>;
  constructor(
    private itemCategoryService: ItemCategoryService,
    private contentService : ContentService,
    private contentMediaService : ContentMediaService
  ) { 
    this.contentMediaForm = this.createFormGroup();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  //Update Item Category
  updateListItemCategories() {
    this.itemCategoryService.getItemCategories().subscribe(itemCategories => {
      this.listItemCategories = itemCategories;
    });
  }
  //Update content
  updateListContent() {
    this.contentService.getContent().subscribe(itemCategories => {
      this.listContent = itemCategories;
    });
  }
  //Update content Media
  updateListContentMedia() {
    this.contentMediaService.getContentMedia().subscribe(contentMedia => {
      this.listContentMedia = contentMedia
      this.data= new MatTableDataSource<ContentMedia>(this.listContentMedia);
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
deleteContentMedia(id: number) {
  this.contentMediaService.deleteContentMedia(id).subscribe(contentMedia => {
    this.updateListContentMedia();
  },
    error => {
      alert(JSON.stringify(error));
    })
}
//Update
updateContentMedia(id: number) {
  alert(JSON.stringify(this.contentMediaForm.valueChanges));
}
  ngOnInit() {
    this.updateListContentMedia();
    this.updateListContent();
    this.updateListItemCategories();
   
  }
   //columns table
   displayedColumns: string[] = ['path', 'itemCategory','content', 'delete', 'update'];
   //FormGroup
     createFormGroup() {
       return new FormGroup({
   
        content_media_id: new FormControl(),
        path: new FormControl('', [
           Validators.required,
         ]),
         item_category_item_category_id: new FormControl('', [
           Validators.required,
         ]),
         content_content_id: new FormControl('', [
           Validators.required,
         ]),
       });

       
     }
//Load data in form
loadData(contentMediaEdit: ContentMedia) {
  this.contentMediaForm.setValue({
    content_media_id: contentMediaEdit.content_media_id,
    path : contentMediaEdit.path,
    item_category_item_category_id: contentMediaEdit.item_category_item_category_id,
    content_content_id:contentMediaEdit.content_content_id

  })
}


 //submit form
 submitForm() {
  if (this.contentMediaForm.value.content_media_id== null) {
    if (this.contentMediaForm.valid) {
      this.contentMediaService.createContentMedia(this.contentMediaForm.value).subscribe(contentMedia => {
        this.updateListContentMedia();
      }, error => {
        alert(JSON.stringify(error));
      })
      this.resetForm();
    }
  }
  else {
    if (this.contentMediaForm.valid) {
      this.contentMediaService.updateContentMedia(this.contentMediaForm.value).subscribe(contentMedia => {
        this.updateListContentMedia();
      })
      this.resetForm();
    }
  }
}
 //reset form
 resetForm() {
  let control: AbstractControl = null;
  this.contentMediaForm.reset({ active: false });
  this.contentMediaForm.markAsUntouched();
  Object.keys(this.contentMediaForm.controls).forEach((nameControl) => {control = this.contentMediaForm.controls[nameControl];
    control.setErrors(null);
  });

}
}
