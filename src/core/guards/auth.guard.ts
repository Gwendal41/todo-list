import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user!: firebase.default.auth.UserCredential;

  constructor(
    private router: Router,
    private dbAuthS: AuthService
  ) {
    this.dbAuthS.user$.subscribe(user => this.user = user)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.user.user) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }

  }

}
