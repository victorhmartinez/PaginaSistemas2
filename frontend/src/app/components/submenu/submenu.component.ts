import { Component, OnInit } from '@angular/core';
//Services
import { SubMenuService } from '../../services/subMenu.service';
import { MenuService } from '../../services/menu.service';

//Models
import { Menu } from '../../models/menu';
import { SubMenu } from '../../models/subMenu';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  listSubMenu: SubMenu[] = [];
  listMenu: Menu[] = [];
  subMenuForm: FormGroup;

  constructor(
    private menuService: MenuService,
    private subMenuService: SubMenuService,
  ) {
    this.subMenuForm = this.createFormGroup();
  }

  updateListMenu() {
    this.menuService.getMenu().subscribe(menu => {
      this.listMenu = menu;
    });
  }

  //All 
  updateListSubMenu() {
    this.subMenuService.getSubMenu().subscribe(subMenu => {
      this.listSubMenu = subMenu
    },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

  deleteSubMenu(id: number) {
    this.subMenuService.deleteSubMenu(id).subscribe(subMenu => {
      this.updateListSubMenu();
    },
      error => {
        alert(JSON.stringify(error));
      })

  }

  updateSubMenu(id: number) {
    alert(JSON.stringify(this.subMenuForm.valueChanges));
  }

  ngOnInit() {
    this.updateListSubMenu();
    this.updateListMenu();
  }

  displayedColumns: string[] = ['name', 'orden', 'menu', 'delete', 'update'];

  createFormGroup() {
    return new FormGroup({
      subMenu_id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),
      orden:  new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),
      menu_id: new FormControl('', [
        Validators.required,
      ]), 
    });
  }

  //Load data in form
  loadData(subMenuEdit: SubMenu) {
    this.subMenuForm.setValue({
      subMenu_id: subMenuEdit.subMenu_id,
      name: subMenuEdit.name,
      orden: subMenuEdit.orden,
      menu_id: subMenuEdit.menu_id,

    })
  }
  
  //submit form
  submitForm() {
    if (this.subMenuForm.value.subMenu_id == null) {
      if (this.subMenuForm.valid) {
        this.subMenuService.createSubMenu(this.subMenuForm.value).subscribe(subMenu => {
          this.updateListSubMenu();
        }, error => {
          alert(JSON.stringify(error));
        })
        this.resetForm();
      }
    }
    else {
      if (this.subMenuForm.valid) {
        this.subMenuService.updateSubMenu(this.subMenuForm.value).subscribe(subMenu => {
          this.updateListSubMenu();
        })
        this.resetForm();
      }
    }
  }

  //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.subMenuForm.reset({ active: false });
    this.subMenuForm.markAsUntouched();
    Object.keys(this.subMenuForm.controls).forEach((nameControl) => {control = this.subMenuForm.controls[nameControl];
      control.setErrors(null);
    });
  }

}