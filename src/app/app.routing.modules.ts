import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketFlightsComponent } from './components/basket-flights/basket-flights.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './main/content/content.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                pathMatch: 'full',
            },
            {
              path: 'basket-flights',
              component: BasketFlightsComponent,
          },
            {
              path: 'not-found',
              component: PageNotFoundComponent
          }
        ]
    },
    {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
