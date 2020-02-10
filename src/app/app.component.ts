import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wrapperexample';
  clicked() {
    console.log("Implement delete functionality here");
  }
  buttonclicked() {
    console.log("Implement shui button click functionality here");
  }
}
