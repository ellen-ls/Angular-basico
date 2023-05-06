import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/lisa-debochada.jpg?resize=576%2C1024&ssl=1"
  contentTitle:string="Minha noticia"
  contentDescription:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
