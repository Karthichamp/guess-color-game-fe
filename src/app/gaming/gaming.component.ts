import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameResultService } from '../services/game-result.service';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  btnList:string[];
  round:number;
  score:number;
  selected:number;
  constructor(private router:Router,private gameResultService:GameResultService) { }

  ngOnInit(): void {
    this.btnList=["aqua","red","blue","green","yellow","pink","voilet","brown","grey","chocolate"];
    this.round=1;
    this.score=0;
    this.selected=0;
  }

  gameBtnClick(btnName:string){
    this.selected=this.btnList.indexOf(btnName)+1;
    if(this.selected==this.fibonacci(this.round)){
      this.score+=10
    }
    else{
      this.score-=10;
    }
    console.log("Score of round "+this.round+" is "+this.score)
    if(this.round==6){
      console.log("Game completed")
      this.router.navigate(['/result']);
      var currentScore={score:this.score};
      this.gameResultService.setScoreValue(currentScore);
    }
    this.round+=1;
  }
  fibonacci(n:number){
    var i : any;
    var a = 0, b = 1, f = 1;
    for(i = 2; i <= n; i++) {
      f = a + b;
      a = b;
      b = f;
  }
  return f;
  }
}
