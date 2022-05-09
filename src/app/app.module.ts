import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DaraBindingComponent } from './dara-binding/dara-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AtributeDirectivesComponent } from './atribute-directives/atribute-directives.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { BankingComponent } from './banking/banking.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DaraBindingComponent,
    StructuralDirectivesComponent,
    AtributeDirectivesComponent,
    FormComponent,
    ReactiveFormsComponent,
    FirstComponentComponent,
    NotFoundComponent,
    HomeComponent,
    BankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
