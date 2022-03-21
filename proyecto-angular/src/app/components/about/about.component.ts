import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor() {
    this.title = "Gabriel Ruiz";
    this.subtitle = "Desarrollador Front-end y Software Tester QA";
   }

  ngOnInit(): void {
  }

}
