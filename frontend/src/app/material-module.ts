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
        
    ]
})
export class MaterialModule { }
