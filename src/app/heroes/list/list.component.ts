import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroesName : string[] = ['spiderman', 'hulk', 'she hulk', 'thor'];
    public deleteHero ?: string;

    deleteLastHero(): void{
      this.deleteHero = this.heroesName.pop();
    }

}
