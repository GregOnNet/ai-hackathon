import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'ai-one-column-layout',
  templateUrl: './one-column-layout.component.html',
  styleUrls: ['./one-column-layout.component.scss']
})
export class OneColumnLayoutComponent {
  @ViewChild(MatSidenav) private _sidenav: MatSidenav;
  @ViewChild('container') private container: HTMLDivElement;

  toggleSidenav() {
    this._sidenav.toggle();
  }
}