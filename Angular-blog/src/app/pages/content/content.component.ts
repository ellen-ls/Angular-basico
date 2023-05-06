import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/lisa-debochada.jpg?resize=576%2C1024&ssl=1"
  contentTitle:string="Minha noticia"
  contentDescription:string=''
  private id:string | null = "0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
      )
      this.setValuestoComponent(this.id)
  }
setValuestoComponent(id:string | null){
const result = dataFake.filter(article =>article.id === id)[0]


this.contentTitle = result.title
this.contentDescription = result.description
this.photoCover = result.photoCover

}
}
