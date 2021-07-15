import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
{path: '', redirectTo: 'datadriven', pathMatch: 'full' },

{path: '', component: DatadrivenComponent},
{path: 'hero-form', component: HeroFormComponent},
{path: 'items', component: ItemsComponent}

// {path: '', redirectTo: 'home', pathMatch: 'full'},
// {path: 'home', component: HomeComponent},
// {path: 'about', component: AboutComponent},


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule{

}
