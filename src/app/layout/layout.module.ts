import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OneColumnLayoutComponent } from './one-column-layout/one-column-layout.component';
import { RouterModule } from '@angular/router';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [MenuBarComponent, OneColumnLayoutComponent, SidebarLinkComponent],
  exports: [MenuBarComponent, OneColumnLayoutComponent]
})
export class LayoutModule { }
