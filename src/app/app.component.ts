import { Component } from '@angular/core';
import { SidebarLink } from './layout/sidebar-link/sidebar-link';

@Component({
  selector: 'ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: SidebarLink[] = [
    { icon: 'home', path: '', text: 'Home' },
    { icon: 'favorite', path: '', text: 'Favorites' }
  ];
}
