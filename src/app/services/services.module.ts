import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiTeamService } from './api-team.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  	ApiTeamService ,
  ]
})
export class ServicesModule { }
