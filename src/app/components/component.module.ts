import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { FlightsReservationComponent } from './flights-reservation/flights-reservation.component';
import { HomeComponent } from './home/home.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { BasketFlightsComponent } from './basket-flights/basket-flights.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [
    FlightsReservationComponent,
    HomeComponent,
    FlightsListComponent,
    BasketFlightsComponent
  ]
})
export class ComponentModule { }








