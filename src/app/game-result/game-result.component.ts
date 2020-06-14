import { Component, OnInit } from '@angular/core';
import { GameResultService } from '../services/game-result.service';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {
  gameScore:number;
  fullName:String;
  constructor(private gameResultService:GameResultService) { }

  ngOnInit(): void {
    this.gameScore=this.gameResultService.getScoreValue().score;
    this.fullName=this.gameResultService.getNameValue().name;
    var scoreOfPlayer={
      name:this.fullName,
      score:this.gameScore
    }
    console.log(scoreOfPlayer);
   /* this.gameResultService.saveScore(scoreOfPlayer).subscribe(
      (score)=>{
        console.log(score);
      },
      err=>console.log(err)
    );*/
  }

}
