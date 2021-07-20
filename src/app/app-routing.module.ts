// import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
// {path: '', redirectTo: 'datadriven', pathMatch: 'full' }, // for now comment it
// {path: '', component: DatadrivenComponent}, // for now comment it
{path: 'items', component: ItemsComponent},

{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: '', component: HomeComponent},
{path: 'hero-form', component: HeroFormComponent},
 {path: 'home', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'template_form', component: TemplateFormComponent},

//  {
//   path: "auth",
//   loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
// }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule{

}
