import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = "ironman";
  public age : number = 45;

  get capitalizationName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    debugger;
    this.name = "spiderman";
  }

  changeAge(): void {
    this.age = 25;
  }

  reset(): void{
    console.log("tengo hambre");
    this.name = "ironman";
    this.age = 45;
  }

}
