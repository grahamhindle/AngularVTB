import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { DescriptionComponent } from './Description/Description.component';
import { TradeDescriptionComponent } from './TradeDescription/TradeDescription.component';
import { OperationFlowComponent } from './OperationFlow/OperationFlow.component';
import { ClientDescriptionComponent } from './ClientDescription/ClientDescription.component';
import { ProductTypeComponent } from './ProductType/ProductType.component';
import { GecDocComponent } from './GecDoc/GecDoc.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		

		{ path: 'TradeDescription', component: TradeDescriptionComponent},

		{ path: 'OperationFlow', component: OperationFlowComponent},

		{ path: 'ClientDescription', component: ClientDescriptionComponent},

		{ path: 'ProductType', component: ProductTypeComponent},

		{ path: 'GecDoc', component: GecDocComponent},

		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
