import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientaccountdetailsComponent } from './clientaccountdetails/clientaccountdetails.component';
import { ClienthomeComponent } from './clienthome/clienthome.component';
import { ClientmakedepositComponent } from './clientmakedeposit/clientmakedeposit.component';
import { ClientmaketransferComponent } from './clientmaketransfer/clientmaketransfer.component';
import { ClientmakewithdrawalComponent } from './clientmakewithdrawal/clientmakewithdrawal.component';
import { ClienttransactionrecordsComponent } from './clienttransactionrecords/clienttransactionrecords.component';
import { HomeComponent } from './home/home.component';
import { PcloseclientAccountComponent } from './pcloseclient-account/pcloseclient-account.component';
import { PopenclientAccountComponent } from './popenclient-account/popenclient-account.component';
import {PregisterclientComponent} from './pregisterclient/pregisterclient.component';
import { PviewclientdetailsComponent } from './pviewclientdetails/pviewclientdetails.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';

export const bankhome_ChildrenRoutes: Routes = [
  {path:'registerClient',component: PregisterclientComponent},
  {path:'viewCient',component: PviewclientdetailsComponent},
  {path:'openClientAccount',component:PopenclientAccountComponent},
  {path:'closeClientAccount',component:PcloseclientAccountComponent},
];

export const clientshome_ChildrenRoutes: Routes = [
  {path: 'clientmakeDeposit',component:ClientmakedepositComponent},
  {path: 'clientmakeWithdrawal',component:ClientmakewithdrawalComponent},
  {path: 'clientmakeTransfer',component: ClientmaketransferComponent},
  {path:'clientaccountDetails',component:ClientaccountdetailsComponent},
  {path: 'clientrecordTransactions',component:ClienttransactionrecordsComponent},
]


const routes: Routes = [
  //{path:'registerClient',component: PregisterclientComponent},
  //{path:'viewCient',component: PviewclientdetailsComponent},
  //{path:'openClientAccount',component:PopenclientAccountComponent},
  //{path:'closeClientAccount',component:PcloseclientAccountComponent},
  //{path: 'clientmakeDeposit',component:ClientmakedepositComponent},
  //{path: 'clientmakeWithdrawal',component:ClientmakewithdrawalComponent},
  //{path: 'clientmakeTransfer',component: ClientmaketransferComponent},
  //{path:'clientaccountDetails',component:ClientaccountdetailsComponent},
  //{path: 'clientrecordTransactions',component:ClienttransactionrecordsComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'welcome',component:WelcomeContentComponent},
  {path: 'clientHome',component:ClienthomeComponent,children:clientshome_ChildrenRoutes},
  {path: 'home',component:HomeComponent,children:bankhome_ChildrenRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
