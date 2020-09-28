import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  @Input() titreJeux: string;
  @Input() descriptionJeux: string;
  @Input() urlJeux: string;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
