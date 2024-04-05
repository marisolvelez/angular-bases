import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-bdz-main-pages',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent  {

  public characters : Character[] = [
    {
      name : 'krilin',
      power : 1000
    },
    {
      name : 'gobu',
      power : 9500
    }
  ]

}
