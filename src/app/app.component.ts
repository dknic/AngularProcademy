import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';
  reactiveForm: FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('female'),
      street: new FormControl(null),
      country: new FormControl('India'),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null),
    });
  }

  handleSubmit() {
    console.log('button click');
    console.log(this.reactiveForm);
  }
}
