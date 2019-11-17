import { ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalComponent } from './modal.component';

export class ModalClass implements OnInit {
  @ViewChild(ModalComponent, {static: false})
  modalComponent: ModalComponent;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onHidden: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.modalComponent.onHidden.subscribe(e => {
      this.onHidden.emit(e);
    });

    this.modalComponent.onShow.subscribe(e => {
      this.onShow.emit(e);
    });
  }

  show() {
    this.modalComponent.show();
  }

  hide() {
    this.modalComponent.hide();
  }

}
