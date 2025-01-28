import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../components/back-to-home/back-to-home.component';

@Component({
  selector: 'app-picker',
  imports: [BackToHomeComponent],
  templateUrl: './picker.component.html',
  styleUrl: './picker.component.scss',
})
export class PickerComponent {}
