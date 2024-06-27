import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.scss']
})
export class ShowOfferComponent {

  @Output() onShowOfferModal = new EventEmitter<void>();

  showOfferModal() {
    this.onShowOfferModal.emit();
  }

}
