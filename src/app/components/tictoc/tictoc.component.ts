import { Component } from '@angular/core';
import { BackToHomeComponent } from '../back-to-home/back-to-home.component';

@Component({
  selector: 'app-tictoc',
  imports: [BackToHomeComponent],
  templateUrl: './tictoc.component.html',
  styleUrl: './tictoc.component.scss',
})
export class TictocComponent {}
