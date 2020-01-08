import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { slideInAnimation } from './app.route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor() {

  }

  ngOnInit(): void {
  }

  getAnimationData(routerOutlet: RouterOutlet) {
    return routerOutlet
      && routerOutlet.activatedRouteData
      && routerOutlet.activatedRouteData.animation;
  }
}
