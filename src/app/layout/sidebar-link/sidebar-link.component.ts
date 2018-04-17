import { Component, Input } from '@angular/core';

import { SidebarLink } from './sidebar-link';

@Component({
  selector: 'ai-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent {
  @Input() link: SidebarLink;
}
