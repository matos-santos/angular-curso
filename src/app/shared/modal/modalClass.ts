import { ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalComponent } from './modal.component';

export class ModalClass implements OnInit {
  @ViewChild(ModalComponent, {static: false})
  modalComponent: ModalComponent;

  @Output()
  onHidden: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter<any>();

  show() {
    this.modalComponent.show();
  }

  hide() {
    this.modalComponent.hide();
  }

  ngOnInit() {
    this.modalComponent.onHidden.subscribe(e => {
      this.onHidden.emit(e);
    });

    this.modalComponent.onShow.subscribe(e => {
      this.onShow.emit(e);
    });
  }
}
