import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';

  public counter = 10

  incrementBy( value: number){
    this.counter += value;
  }

}
