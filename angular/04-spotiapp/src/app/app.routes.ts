import { Route } from '@angular/compiler/src/core';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {ArtistaComponent} from './components/artista/artista.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';

const routes:Routes=[
    {path:'artista/:id',component: ArtistaComponent},
    {path:'home',component:HomeComponent},
    {path:'search',component:SearchComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

