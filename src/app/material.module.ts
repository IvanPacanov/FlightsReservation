import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
  MatFormFieldModule
} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};


const modules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatTableModule

];

@NgModule({
  imports: modules,
  exports: modules,
  providers: [{
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
  }]
})
export class MaterialModule { }
