import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [
    //importaciones en este caso commonModules es por las directivas de ngif y ngfor
    CommonModule
  ],
  exports: [
    //para que sea visibles estos componentes en todo el proyecto
    HeroComponent,
    ListComponent
  ],
  declarations: [
    //aqui los componentes
    HeroComponent,
    ListComponent
  ],
})
export class HeroesModule { }

