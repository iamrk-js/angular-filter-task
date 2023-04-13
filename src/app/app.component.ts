import { Component } from '@angular/core';
import { iPlayer, players } from './players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customPipe';
  slectedCountry: string = ''
  playersArray: iPlayer[] = players

}
