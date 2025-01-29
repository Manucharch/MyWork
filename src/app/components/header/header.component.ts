import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslateModule, LanguageToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
