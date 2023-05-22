import { Component, DoCheck, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements DoCheck {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isAdmin = false;
  userLogin = false;
  userName: any;
  constructor(private breakpointObserver: BreakpointObserver) {
    let isadmin = sessionStorage.getItem('role');
    let username = sessionStorage.getItem('userName');
    if (isadmin == 'true') {
      this.isAdmin = true;
    }

    let login = sessionStorage.getItem('login');
    if (login === 'true') {
      this.userLogin = true;
      this.userName = username;
    }

  }

  logOut() {
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('token');


  }

  ngDoCheck(): void {
    let isadmin = sessionStorage.getItem('role');
    let username = sessionStorage.getItem('userName');

    if (isadmin == 'true') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    let login = sessionStorage.getItem('login');
    if (login === 'true') {
      this.userLogin = true;
      this.userName = username;
    } else {
      this.userLogin = false;
    }
  }
}
