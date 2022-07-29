import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First Project';
  color = "#";
  letters = '0123456789ABCDEF';

  getRandomColour(){
    this.color = '#';
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }
}
