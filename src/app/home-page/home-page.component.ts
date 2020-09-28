import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'app-boardfriend';

  slides = [
    {
      id: 1,
      titre: 'Monopoly',
      description: 'Jeux à jouer en famille sans modération',
      url: '../assets/images/j1.jpg'
    },
    {
      id: 2,
      titre: 'Jeu de dame',
      description: 'Jeu un peu stratégique mais je raconte nimp',
      url: '../assets/images/j2.jpg'
    },
    {
      id: 3,
      titre: 'King Of Tokyo',
      description: 'Je commence à devenir fou ',
      url: '../assets/images/j3.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
