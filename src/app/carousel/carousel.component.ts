import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselSlides = [
    {
      id: 1,
      titre: 'Monopoly',
      description: 'Jeux à jouer en famille sans modération',
      url: '../assets/images/m1.jpg'
    },
    {
      id: 2,
      titre: 'Jeu de dame',
      description: 'Jeu un peu stratégique mais je raconte nimp',
      url: '../assets/images/m2.jpg'
    },
    {
      id: 3,
      titre: 'Sea of thieves',
      description: 'Je commence à devenir fou et je défonce le game du dev',
      url: '../assets/images/m3.jpg'
    },
    {
      id: 4,
      titre: 'Sea of thieves',
      description: 'Je commence à devenir fou et je défonce le game du dev',
      url: '../assets/images/m4.jpg'
    },
    {
      id: 5,
      titre: 'Sea of thieves',
      description: 'Je commence à devenir fou et je défonce le game du dev',
      url: '../assets/images/m5.jpg'
    }
  ];

  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
  }  

  ngOnInit(): void {
  }

}
