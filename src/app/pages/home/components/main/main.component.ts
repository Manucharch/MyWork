import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GoToBtnComponent } from '../../../../components/go-to-btn/go-to-btn.component';

@Component({
  selector: 'app-main',
  imports: [RouterLink, TranslateModule, GoToBtnComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
