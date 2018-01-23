import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-equipe-france',
  templateUrl: './equipe-france.component.html',
  styleUrls: ['./equipe-france.component.css']
})
export class EquipeFranceComponent implements OnInit {

  constructor() { }

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

}
