import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

title:string=""

questions:any
questionSelected:any

answers:string[] = []
answerSelected:string = ""

questionsIndex:number = 0
questionMaxindex:number = 0
finished:boolean = false
  constructor() { }

  ngOnInit(): void {
if(quizz_questions){
  this.finished = false
  this.title = quizz_questions.title

  this.questions = quizz_questions.questions
  this.questionSelected = this.questions[this.questionsIndex]

  this.questionsIndex = 0
  this.questionMaxindex = this.questions.length
}
  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()
    
  }

 async nextStep(){
    this.questionsIndex+=1

    if(this.questionMaxindex > this.questionsIndex){
      this.questionSelected = this.questions[this.questionsIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers) 
      this.finished = true
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results]
    }
  }
async checkResult(anwsers:string[]){
  const result = anwsers.reduce((previous, current, i, arr)=>{
    if(
      arr.filter(item => item === previous).length >
      arr.filter(item => item === current).length 
    ){
      return previous
    }else{
      return current
    }
  })
   return result
}
}
