import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PregisterclientComponent } from './pregisterclient/pregisterclient.component';
import { PviewclientdetailsComponent } from './pviewclientdetails/pviewclientdetails.component';
import { PopenclientAccountComponent } from './popenclient-account/popenclient-account.component';
import { PcloseclientAccountComponent } from './pcloseclient-account/pcloseclient-account.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { HomeComponent } from './home/home.component';
import { ClientmakedepositComponent } from './clientmakedeposit/clientmakedeposit.component';
import { ClientmakewithdrawalComponent } from './clientmakewithdrawal/clientmakewithdrawal.component';
import { ClientmaketransferComponent } from './clientmaketransfer/clientmaketransfer.component';
import { ClientaccountdetailsComponent } from './clientaccountdetails/clientaccountdetails.component';
import { ClienttransactionrecordsComponent } from './clienttransactionrecords/clienttransactionrecords.component';
import { ClienthomeComponent } from './clienthome/clienthome.component';
import { ClientsearchComponent } from './clientsearch/clientsearch.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PregisterclientComponent,
    PviewclientdetailsComponent,
    PopenclientAccountComponent,
    PcloseclientAccountComponent,
    SearchClientComponent,
    HomeComponent,
    ClientmakedepositComponent,
    ClientmakewithdrawalComponent,
    ClientmaketransferComponent,
    ClientaccountdetailsComponent,
    ClienttransactionrecordsComponent,
    ClienthomeComponent,
    ClientsearchComponent,
    WelcomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
