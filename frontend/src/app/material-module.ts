import { NgModule } from '@angular/core';


import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
   
} from '@angular/material';

@NgModule({

    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatTableModule,
        MatInputModule,
        MatCheckboxModule,
        MatGridListModule,
        MatSelectModule,
        MatOptionModule,
        MatPaginatorModule,
        
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatTableModule,
        MatInputModule,
        MatCheckboxModule,
        MatGridListModule,
        MatSelectModule,
        MatOptionModule,
        MatPaginatorModule,
        
    ]
    
})
export class MaterialModule { }
