import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-go-to-btn',
  imports: [RouterLink],
  templateUrl: './go-to-btn.component.html',
  styleUrl: './go-to-btn.component.scss',
})
export class GoToBtnComponent {
  title = input('GoTo');
  url = input('/');
}
