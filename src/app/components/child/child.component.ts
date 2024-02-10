import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() dataEvent = new EventEmitter<string>();

  addUser(value: any) {
    this.dataEvent.emit(value);
  }
}
