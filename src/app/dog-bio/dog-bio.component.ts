import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dog-bio',
  templateUrl: './dog-bio.component.html',
  styleUrls: ['./dog-bio.component.scss']
})
export class DogBioComponent implements OnInit {

  @Input()
  bio;
  constructor() { }

  ngOnInit() {
  }

}
