import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatCardModule,
        MatDatepickerModule, 
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatCardModule,
        MatDatepickerModule, 
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule { }