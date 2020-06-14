import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router,CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameResultService implements CanActivate{
  name:BehaviorSubject<{name:String}>;
  score:BehaviorSubject<{score:number}>;
  postScoreURL="http://localhost:3000/gameScore/submit";
  
  constructor(private _http:HttpClient,private router:Router) {
    this.name=new BehaviorSubject<{name:String}>({name:""});
    this.score=new BehaviorSubject<{score:number}>({score:0});
   }

   canActivate(){
    if(this.getNameValue().name!=""){
      return true;
    }
    this.router.navigate(["/"]);
     return false;
   }

   setNameValue(name){
     this.name.next(name);
   }

   getNameValue(){
     return this.name.value;
   }

  setScoreValue(newScore){
    this.score.next(newScore);
  }

  getScoreValue(){
    return this.score.value;
  }

  saveScore(newScore){
    return this._http.post(this.postScoreURL,newScore);
  }
}
