import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  currentPageTitle = 'Menu';

  appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'List Tracking',
      url: 'list-tracking',
      icon: 'car-sport'
    },
    {
      title: 'Start Tracking',
      url: 'tracking',
      icon: 'analytics'
    },
    {
      title: 'Account',
      url: 'account',
      icon: 'accessibility'
    }
  ];
  UserId: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.UserId = Storage.get({ key: 'USER_ID' });
    if (this.UserId == null) {
      this.router.navigate(['sign-in']);
    }
      this.router.navigate(['home']);
  }
  openPage(page: any  ) {
    this.router.navigateByUrl(`/${page.url}`);
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }

}
