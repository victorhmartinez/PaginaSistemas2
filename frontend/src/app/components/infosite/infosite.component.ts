import { Component, OnInit, ViewChild } from '@angular/core';
//Services
import { InfoSiteService } from '../../services/infoSite.service';
//Models
import { InfoSite } from '../../models/infoSite';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.component.html',
  styleUrls: ['./infosite.component.css']
})
export class InfositeComponent implements OnInit {
  listInfoSites: InfoSite[] = [];
  infoSiteForm: FormGroup;
  data:MatTableDataSource<any>;

  constructor(
    private infoSiteService: InfoSiteService
  ) {
    this.infoSiteForm = this.createFormGroup();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  updateListInfoSite() {
    this.infoSiteService.getInfoSite().subscribe(infoSite => {
      this.listInfoSites = infoSite;
      this.data= new MatTableDataSource<InfoSite>(this.listInfoSites);
      this.data.paginator=this.paginator;
    })
  }
//Filter the table
applyFilter(filterValue: string) {
  this.data.filter = filterValue.trim().toLowerCase();
}
  deleteInfoSite(Site_site_id: number) {
    this.infoSiteService.deleteInfoSite(Site_site_id).subscribe(infoSite => {
      this.updateListInfoSite();
    },
      error => {
        alert(JSON.stringify(error));
      })

  }

  ngOnInit() {
    this.updateListInfoSite();
  }
  displayedColumns: string[] = ['description', 'type_info', 'delete', 'update'];

  //Create new form
  createFormGroup() {
    return new FormGroup({
      Site_site_id: new FormControl(),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),
      type_info: new FormControl()

    });
  }

  //Load data in form
  loadData(infoSiteEdit: InfoSite) {
    this.infoSiteForm.setValue({
      Site_site_id: infoSiteEdit.Site_site_id,
      description: infoSiteEdit.description,
      type_info: infoSiteEdit.type_info
    })
  }

  //submit form

  submitForm() {
    if (this.infoSiteForm.value.Site_site_id == null) {
      if (this.infoSiteForm.valid) {
        this.infoSiteService.createInfoSite(this.infoSiteForm.value).subscribe(infoSite => {
          this.updateListInfoSite();
        })
        this.resetForm();
      }
    } else {
      if (this.infoSiteForm.valid) {

        this.infoSiteService.updateInfoSite(this.infoSiteForm.value).subscribe(infoSite => {
          this.updateListInfoSite();
        })
        this.resetForm();
      }
    }

  }
  //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.infoSiteForm.reset({ active: false });
    this.infoSiteForm.markAsUntouched();
    Object.keys(this.infoSiteForm.controls).forEach((nameControl) => {
      control = this.infoSiteForm.controls[nameControl];
      control.setErrors(null);

    });

  }
}

