import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBarComponent } from './shared/reusableComponents/app-bar/app-bar.component';
import { SideNavComponent } from './shared/reusableComponents/side-nav/side-nav.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatSidenav, MatSidenavModule
} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DesignerComponent } from './pages/designer/designer.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppBarComponent, SideNavComponent, MatSidenavModule,
    MatListModule, DesignerComponent, FormsModule, ReactiveFormsModule,KeycloakAngularModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public kc: KeycloakService) { }
  title = 'frontend';
  fixed!: true;




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
}
