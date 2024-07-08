import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatSidenav,
    MatListModule, MatIconModule, RouterOutlet
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Output() closeSideNav = new EventEmitter();

  constructor(private router: Router) { }

  onToggleClose() {
    this.closeSideNav.emit();
    console.log("toggled from sidenav")
  }
  ngOnInit() {
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSideNav.emit();
  }




}
