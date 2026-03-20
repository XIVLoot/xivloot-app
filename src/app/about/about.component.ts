import { Component } from '@angular/core';
import { STANDALONE_IMPORTS } from '../standalone-imports';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
  imports: [...STANDALONE_IMPORTS],
})
export class AbAuthComponent {

}
