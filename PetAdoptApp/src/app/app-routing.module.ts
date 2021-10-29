import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptioninfoComponent } from './adoptioninfo/adoptioninfo.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { HomeComponent } from './core/home/home.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "pets", component: PetsComponent},
  { path: "adoptions/:id", component: AdoptionsComponent},
  { path: "adoptioninfo", component: AdoptioninfoComponent},
  { path: "", redirectTo: "/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
