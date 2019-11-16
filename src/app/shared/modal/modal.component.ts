import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output()
  onHidden: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter<any>();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    $(this.divModal).on('hidden.bs.modal', (e) => {
      this.onHidden.emit(e);
    });

    $(this.divModal).on('show.bs.modal', (e) => {
      this.onShow.emit(e);
    });
  }

  private get divModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

  show() {
    $(this.divModal).modal('show');
  }

  hide() {
    $(this.divModal).modal('hide');
  }
}
