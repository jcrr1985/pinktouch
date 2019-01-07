import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-active-members',
  templateUrl: './active-members.component.html',
  styleUrls: ['./active-members.component.css']
})
export class ActiveMembersComponent implements OnInit {


dogsArray = [
	{
		image: "../assets/perrito2.jpg",
		name: "Bobby",
		bio:" Hola, soy Bobby y tengo 4 años"	
	},
		{
		image: "../assets/perrito3.jpg",
		name: "Dylan",
		bio: "Hey, soy Bobby y tengo 7 años"
	},
		{
		image: "../assets/perrito4.jpg",
		name: "Michael",
		bio: "Hello, soy Michael y tengo 8 años"	
	},
		{
		image: "../assets/perrito5.jpg",
		name: "Lisa",
		bio: "Bon Jour, soy Lisa y tengo 5 años" 
	},
		{
		image: "../assets/perrito6.jpg",
		name: "Avril",
		bio: "Hola, soy Avril y tengo 9 años"
	},
		{
		image: "../assets/perrito7.jpg",
		name: "Shemp, Larry y Moe",
		bio: "Ciao, somos Shemp, Larry y Moe y tenemos 3 meses"	
	}
];



iter;

  constructor() { }

  ngOnInit() {
  }

  sendDog(k){
  this.iter = k;
  }


}
