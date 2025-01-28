import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainService } from './pages/services/main.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  languages: string[] = [];
  title = 'MyWork';

  constructor(
    private translate: TranslateService,
    private service: MainService
  ) {
    this.languages = this.service.languages().map((lang) => lang.code);

    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.languages[0]);
    this.translate.use(this.languages[0]);
  }
}
