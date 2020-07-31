import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './../services/google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  SendAddToCartEvent(){
    this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 1);
  }
}
