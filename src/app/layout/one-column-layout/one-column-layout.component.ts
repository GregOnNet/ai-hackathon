import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { SidebarLink } from '../sidebar-link/sidebar-link';

@Component({
  selector: 'ai-one-column-layout',
  templateUrl: './one-column-layout.component.html',
  styleUrls: ['./one-column-layout.component.scss']
})
export class OneColumnLayoutComponent {
  @Input() links: SidebarLink[];

  @ViewChild(MatSidenav) private _sidenav: MatSidenav;
  @ViewChild('container') private container: HTMLDivElement;

  toggleSidenav() {
    this._sidenav.toggle();
  }
}
