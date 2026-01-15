import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //este es el hijo que va a resivir info del padre y para obtener lo se pone el decorador @input
  @Input()
  public characterList : Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  onDelete(index: number): void {
    this.onDeleteCharacter.emit(index);
  }
}
