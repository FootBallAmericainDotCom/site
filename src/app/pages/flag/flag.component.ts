import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.initCarousel();
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
