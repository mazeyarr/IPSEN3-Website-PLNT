import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.login();
  }

  getAnimationData(routerOutlet: RouterOutlet) {
    return routerOutlet
      && routerOutlet.activatedRouteData
      && routerOutlet.activatedRouteData.animation;
  }
}
