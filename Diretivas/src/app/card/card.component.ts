import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
produtos:string[] = [] 
meuType:string='user'
  constructor() { 
    this.produtos =[
      "mouse",
      "teclado",
      "fonte"
    ]
      
  }

  ngOnInit(): void {
  }
  adicionar(){
this.produtos.push("ellen")
  }

  remover(index:number){
    this.produtos.splice(index ,1)

  }

}
