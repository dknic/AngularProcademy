import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'This is a parant component';
  // single value from parant to child
  currentName = 'John Root';
  obj = {
    name: 'Kane Williamson',
    age: 45,
    country: 'New Zealand',
  };
}
