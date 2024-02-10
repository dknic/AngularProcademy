import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Parent Component';

  users = ['Trent Boult', 'Devon Conway'];

  addUser(user: string) {
    this.users.push(user);
  }
}
