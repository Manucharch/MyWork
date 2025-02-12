import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RainbowComponent } from '../rainbow/rainbow.component';

@Component({
  selector: 'app-main',
  imports: [TranslateModule, RainbowComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
