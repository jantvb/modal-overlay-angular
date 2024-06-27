import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowOfferComponent } from './components/show-offer/show-offer.component';
import { AcceptOfferModalComponent } from './components/accept-offer-modal/accept-offer-modal.component';
import { OfferAcceptedComponent } from './components/offer-accepted/offer-accepted.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowOfferComponent,
    AcceptOfferModalComponent,
    OfferAcceptedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
