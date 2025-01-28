import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../pages/services/main.service';
import { LanguageInterface } from '../../pages/types/languages.inteface';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent implements OnInit {
  languages = signal<LanguageInterface[]>([]);

  language = signal<LanguageInterface>({ code: '', country: '', flag: '' });

  imageUrl = computed(() => this.language().flag);

  constructor(
    private service: MainService,
    private translateService: TranslateService
  ) {
    this.languages = this.service.languages;
  }
  ngOnInit(): void {
    this.language.set(this.languages()[0]);
  }

  changeLanguage(event: any) {
    const selectElement = event.target as HTMLSelectElement;

    this.language.set(
      this.languages().find((lang) => lang.code === selectElement.value)!
    );

    this.translateService.use(this.language().code);
  }
}
