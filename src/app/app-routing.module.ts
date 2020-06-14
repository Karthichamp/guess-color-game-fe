import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { GamingComponent } from './gaming/gaming.component';
import { GameResultComponent } from './game-result/game-result.component';
import { GameResultService } from './services/game-result.service';

const routes: Routes = [
  {
    path:'',
    component: UserDataComponent
  },
  {
    path:'game',
    component: GamingComponent
  },
  {
    path:'result',
    component: GameResultComponent,
    canActivate: [GameResultService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
