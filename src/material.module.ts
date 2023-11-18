import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
//import modules of radio, checkbox, table, paginator, sort, dialog
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({

    exports: [
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
    ],
})
export class MaterialModule {}
