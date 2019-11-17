import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'app-modal',
  template: `
  <div class="modal fade" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <ng-content select="[modal-title]"></ng-content>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ng-content select="[modal-body]"></ng-content>
      </div>
      <div class="modal-footer">
        <ng-content select="[modal-footer]"></ng-content>
      </div>
    </div>
  </div>
</div>`,
  styles: []
})
export class ModalComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onHidden: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    $(this.divModal).on('hidden.bs.modal', (e) => {
      this.onHidden.emit(e);
    });

    $(this.divModal).on('show.bs.modal', (e) => {
      this.onShow.emit(e);
    });
  }

  show() {
    $(this.divModal).modal('show');
  }

  hide() {
    $(this.divModal).modal('hide');
  }

  private get divModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }
}
