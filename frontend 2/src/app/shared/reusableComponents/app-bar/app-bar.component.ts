import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, SideNavComponent,KeycloakAngularModule],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBarComponent implements OnInit {
  constructor(public kc: KeycloakService) { }

  ngOnInit(): void {

    if (this.kc.isLoggedIn()) {
      this.kc.loadUserProfile().then(profile => {
        const username = profile.username || 'default_username';
        sessionStorage.setItem('username', username);
        console.log(username)
      }

      );
    }
  }

  onlogOut() {
    sessionStorage.removeItem('username')
    this.kc.logout(window.location.origin);
  }

  async login() {
    await this.kc.login({
      redirectUri: window.location.origin
    });
  }

  @Output() SideNavToggle = new EventEmitter();

  openSidenav() {
    this.SideNavToggle.emit();
    console.log("toggled from app bar")

  }
}
