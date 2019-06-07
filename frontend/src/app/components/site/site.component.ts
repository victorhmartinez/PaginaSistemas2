import { Component, OnInit } from '@angular/core';
//Services
import { SiteService } from '../../services/site.service';
//Models
import { Site } from '../../models/site';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  listSites: Site[] = [];
  siteForm: FormGroup;

  constructor(
    private siteServices: SiteService
  ) {
    this.siteForm = this.createFormGroup();
  }

  updateListSites() {
    this.siteServices.getSite().subscribe(person => {
      this.listSites = person;
    })
  }

  deleteSites(site_id: number) {
    this.siteServices.deleteSite(site_id).subscribe(site => {
      this.updateListSites();
    },
      error => {
        alert(JSON.stringify(error));
      })

  }

  ngOnInit() {
    this.updateListSites();
  }
  displayedColumns: string[] = ['title', 'icon', 'favicon', 'delete', 'update'];

  //Create new form
  createFormGroup() {
    return new FormGroup({
      site_id: new FormControl(),
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      icon: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      favicon: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),

    });
  }

  //Load data in form
  loadData(sitesEdit: Site) {
    this.siteForm.setValue({
      site_id : sitesEdit.site_id,
      title: sitesEdit.title,
      icon: sitesEdit.icon,
      favicon:sitesEdit.favicon      
    })
  }

  //submit form

  submitForm() {
    if (this.siteForm.value.site_id == null) {
      if (this.siteForm.valid) {
        this.siteServices.createSite(this.siteForm.value).subscribe(site => {
          this.updateListSites();
        })
        this.resetForm();
      }
    }else{
      if (this.siteForm.valid) {
        
        this.siteServices.updateSite(this.siteForm.value).subscribe(site => {
          this.updateListSites();
        })
        this.resetForm();
      }
    }
    
  }

  //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.siteForm.reset({ active: false });
    this.siteForm.markAsUntouched();
    Object.keys(this.siteForm.controls).forEach((nameControl) => {
      control = this.siteForm.controls[nameControl];
      control.setErrors(null);
      
    });
   
  }
}
