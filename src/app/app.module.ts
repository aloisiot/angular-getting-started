import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DaraBindingComponent } from './dara-binding/dara-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AtributeDirectivesComponent } from './atribute-directives/atribute-directives.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DaraBindingComponent,
    StructuralDirectivesComponent,
    AtributeDirectivesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
