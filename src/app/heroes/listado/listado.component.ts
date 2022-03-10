import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['wolverine', 'x-javier', 'magneto', 'gambit'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...')
    this.heroeBorrado = this.heroes.shift() || '';
  }


  constructor() { }

  ngOnInit() {
  }

}
