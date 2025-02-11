import { Component, HostListener, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-card',
  imports: [RouterLink],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  title = input<string>('Default Title');
  description = input<string>('Default description text');
  icon = input<string>('');
  bgColor = input<string>('#2c3e50');
  textColor = input<string>('#ffffff');
  url = input<string>('/tictoc');
}
