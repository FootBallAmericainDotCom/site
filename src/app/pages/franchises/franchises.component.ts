import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ApiTeamService } from '../../services/api-team.service';

import { Team } from '../../models/team';

@Component({
  selector: 'app-franchises',
  templateUrl: './franchises.component.html',
  styleUrls: ['./franchises.component.css']
})
export class FranchisesComponent implements OnInit {
	teams: Team[];


  constructor(private teamService: ApiTeamService, private router: Router) { }

  ngOnInit() {
  	this.teamService.getTeam().then(res => {
  		this.teams = res;
  		console.log(this.teams);
  	});
  }

  goTeamView(e) {
  	this.router.navigate(['nfl/', e.franchise]);
  }

}
