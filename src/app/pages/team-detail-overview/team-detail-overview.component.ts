import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail-overview',
  templateUrl: './team-detail-overview.component.html',
  styleUrls: ['./team-detail-overview.component.css']
})
export class TeamDetailOverviewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goTeamRoster() {
  	const teamName = this.route.snapshot.params['teamName'];

  	this.router.navigate(['nfl/', teamName, 'roster']);
  }

}
