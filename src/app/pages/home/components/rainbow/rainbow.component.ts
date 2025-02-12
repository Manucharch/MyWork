import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rainbow',
  imports: [CommonModule],
  templateUrl: './rainbow.component.html',
  styleUrl: './rainbow.component.scss',
})
export class RainbowComponent {
  cards = new Array(5);
}
