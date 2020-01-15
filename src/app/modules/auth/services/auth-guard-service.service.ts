import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
