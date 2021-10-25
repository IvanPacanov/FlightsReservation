import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.modules';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { MainModule } from './main/main.modules';
import { FooterComponent } from './main/footer/footer.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonNavComponent } from './main/navbar/button/button-nav/button-nav.component';
import { HomeComponent } from './components/home/home.component';
import { FlightsReservationComponent } from './components/flights-reservation/flights-reservation.component';
import { ComponentModule } from './components/component.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatOption } from '@angular/material/core';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    ComponentModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pl',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TranslatePipe]
})
export class AppModule { }
