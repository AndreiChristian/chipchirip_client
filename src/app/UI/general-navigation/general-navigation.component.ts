import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-general-navigation',
  templateUrl: './general-navigation.component.html',
  styleUrls: ['./general-navigation.component.scss']
})
export class GeneralNavigationComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) {}

  isAuthtenticated: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.isAuthtenticated = this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }

}
