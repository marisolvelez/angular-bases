import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public characterAdd : Character =
    {
      name : '',
      power : 0
    }

  emitCharacter() : void {
    console.log("lo que llego", this.characterAdd)
    //validacion para el nombre
    if ( this.characterAdd.name.length === 0 ) return;

    //emitir al padre 
    this.onNewCharacter.emit({ ...this.characterAdd});

    //limpiando
    this.characterAdd.name = '';
    this.characterAdd.power = 0;

  }
}
