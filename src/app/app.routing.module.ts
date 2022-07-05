import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarsComponent } from "./components/cars/cars.component";
import { HomeComponent } from "./components/home/home.component";
import { PodioComponent } from "./components/podio/podio.component";

const routes: Routes=[
    {path:'', redirectTo: '/home', pathMatch:'full'},
    {path:'cars', component: CarsComponent},
    {path:'home', component: HomeComponent},
    {path:'podio/:idg', component: PodioComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}