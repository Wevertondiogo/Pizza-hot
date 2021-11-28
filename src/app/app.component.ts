import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private titleService: Title) { }

  ngOnInit() : void {
  }

  title = "pizza-hot";

  public setTitle(title: string): void  {
    if(title === "Monte Sua Pizza") title = "PizzaHot";
    console.log(title);
    this.titleService.setTitle(title);
  }

}
