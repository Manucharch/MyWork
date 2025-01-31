import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { RouterLink } from '@angular/router';
import { ColorModeComponent } from './color-mode/color-mode.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TranslateModule,
    LanguageToggleComponent,
    ColorModeComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
