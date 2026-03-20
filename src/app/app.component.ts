import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { STANDALONE_IMPORTS } from './standalone-imports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [NavbarComponent, ...STANDALONE_IMPORTS],
})
export class AppComponent {
  title = 'FFXIV-RaidLootWebApp';
}
