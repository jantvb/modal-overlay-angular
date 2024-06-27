import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-overlay';

  showModal:    boolean = false;
  showOfferBtn: boolean = true;

  closeModal() {
    this.showModal    = false;
    this.showOfferBtn = true;
  }

  showOfferModal() {
    this.showOfferBtn = false;
    this.showModal    = true;
  }

  offerAccepted() {
    this.showOfferBtn = false;
    this.showModal    = false;
  }
}
