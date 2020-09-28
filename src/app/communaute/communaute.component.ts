import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {
  searchText : string='';
  
  //list des joeurs existants
  playersList=[
    {
      id:1,
      name: "Jeff",
      city:"Toulouse"
  },
  {
    id:2,
    name: "Ana",
    city:"LIlle"
},
{
  id:3,
  name: "Nemo",
  city:"Paris"
},
{
  id:3,
  name: "Amel",
  city:"Montpellier"
}]

  constructor() { }

  ngOnInit(): void {
    

  }

}
