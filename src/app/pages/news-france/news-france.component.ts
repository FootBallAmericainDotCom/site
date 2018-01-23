import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
	selector: 'app-news-france',
	templateUrl: './news-france.component.html',
	styleUrls: ['./news-france.component.css']
})
export class NewsFranceComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router
		) { 

	}

	ngOnInit() {
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

  // callComments(e) {
  //   this.router.navigate(['/commentaires/', e._id]);
  // }

  callComments() {
  	this.router.navigate(['/commentaires/' , 3 ])
  } 

}
