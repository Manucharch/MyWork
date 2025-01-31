import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCardComponent } from '../../../../components/info-card/info-card.component';

@Component({
  selector: 'app-main',
  imports: [TranslateModule, InfoCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
