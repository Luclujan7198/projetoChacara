import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagemCard1: string = '/../shared/images/imagem_teste.png';

  constructor() { }

  ngOnInit() {
  }

  VisualizarImagem(caminhoImagem: string){
    console.log(caminhoImagem);
    
  }

}
