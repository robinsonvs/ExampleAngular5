import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CryptoFormComponent } from './crypto-form/crypto-form.component';
import { CryptoService } from './crypto-service.service';

import { FormsModule } from '@angular/forms';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';


const routes = [
  { path: '', component: CryptoFormComponent },
  { path: 'submitted', component: FormSubmittedComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CryptoFormComponent,
    FormSubmittedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
