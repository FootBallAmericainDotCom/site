import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { ApiTeamService } from '../../services/api-team.service';

declare var $: any;

@Component({
  selector: 'app-ncaa',
  templateUrl: './ncaa.component.html',
  styleUrls: ['./ncaa.component.css']
})
export class NcaaComponent implements OnInit {
	teams: Team[];


  constructor(private teamService: ApiTeamService) { }

  ngOnInit() {
  	this.initCarousel();
  	this.teamService.getTeam().then(res => {
  		this.teams = res;
  		console.log(this.teams);
  	});

  }



  initCarousel() {
  	$(".owl-carousel").owlCarousel({
			nav:false,
			autoplay:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				768:{
					items:3,
					margin:20
				},
				992:{
					items:5,
					margin:20
				}
			}
		});
  }



}
