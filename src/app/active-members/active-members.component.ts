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
		name: "bobby"
	},
		{
		image: "../assets/perrito3.jpg",
		name: "dylan"
	},
		{
		image: "../assets/perrito4.jpg",
		name: "michael"
	},
		{
		image: "../assets/perrito5.jpg",
		name: "lisa"
	},
		{
		image: "../assets/perrito6.jpg",
		name: "avril"
	},
		{
		image: "../assets/perrito7.jpg",
		name: "bono"
	}
];



iter = this.dogsArray[0]

  constructor() { }

  ngOnInit() {
  }

  sendDog(k){
  this.iter = k;
  }


}
