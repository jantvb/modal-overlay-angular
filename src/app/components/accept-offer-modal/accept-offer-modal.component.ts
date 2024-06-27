import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'accept-offer-modal',
  templateUrl: './accept-offer-modal.component.html',
  styleUrls: ['./accept-offer-modal.component.scss']
})
export class AcceptOfferModalComponent {

  @Output() onCloseModal    = new EventEmitter<void>();
  @Output() onOfferAccepted = new EventEmitter<void>();

  closeModal() {
    this.onCloseModal.emit();
  }

  offerAccepted() {
    this.onOfferAccepted.emit();
  }
}
