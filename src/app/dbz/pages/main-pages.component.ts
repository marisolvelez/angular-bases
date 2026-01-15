import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent  {

  public characters : Character[] = [];

  addCharacter(newCharacter: Character): void {
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

}
