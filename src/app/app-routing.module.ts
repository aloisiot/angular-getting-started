import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: ":param1/:param2", component: HomeComponent },
  { path: "first", component: FirstComponentComponent },
  { path: "reactiveForms", component: ReactiveFormsComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
