import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameResultService } from '../services/game-result.service';
import { GameResultComponent } from '../game-result/game-result.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  fullName:string;
  constructor(private router:Router,private gameResultService:GameResultService) { }

  ngOnInit(): void {
  }

  saveUserName(formValue:any){
    this.fullName=formValue.userName;
    this.gameResultService.setNameValue({name:this.fullName});
    console.log(formValue.userName);
    this.router.navigate(["/game"]);
  }
}
