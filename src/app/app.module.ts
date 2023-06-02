import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import { PaiFilhoComponent } from './paifilho/pai-filho.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    PaiFilhoComponent
  ],
    imports: [
        MatTableModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSelectModule,
        HttpClientModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
