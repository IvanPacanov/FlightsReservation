import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material.module';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonNavComponent } from './navbar/button/button-nav/button-nav.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MaterialModule,
        MainRoutingModule,
        TranslateModule,
        MatMomentDateModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        ContentComponent,
        PageNotFoundComponent,
        ButtonNavComponent
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})
export class MainModule { }
