import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MyWork';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ge', 'en']);
    this.translate.setDefaultLang('ge');
    this.translate.use('ge');
  }
}
