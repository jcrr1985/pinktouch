import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dogdetail',
  templateUrl: './dogdetail.component.html',
  styleUrls: ['./dogdetail.component.css']
})
export class DogdetailComponent implements OnInit {


@Input()
dogInThatMoment;
  constructor() { }

  ngOnInit() {

  }

}
