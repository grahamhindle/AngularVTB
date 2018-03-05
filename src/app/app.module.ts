import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { DescriptionComponent } from './Description/Description.component';
import { TradeDescriptionComponent } from './TradeDescription/TradeDescription.component';
import { OperationFlowComponent } from './OperationFlow/OperationFlow.component';
import { ClientDescriptionComponent } from './ClientDescription/ClientDescription.component';
import { ProductTypeComponent } from './ProductType/ProductType.component';
import { GecDocComponent } from './GecDoc/GecDoc.component';
import { DatePickerComponent } from './date-picker/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    DescriptionComponent,
		TradeDescriptionComponent,
		OperationFlowComponent,
		ClientDescriptionComponent,
		ProductTypeComponent,

    GecDocComponent,

    DatePickerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
