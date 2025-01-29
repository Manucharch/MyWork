import { Injectable, signal } from '@angular/core';
import { LanguageInterface } from '../types/languages.inteface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  languages = signal<LanguageInterface[]>([
    {
      country: 'Georgian',
      flag: 'url(imgs/flags/ge.svg)',
      code: 'ge',
    },
    { country: 'English', flag: 'url(imgs/flags/eu.svg)', code: 'en' },
    // { country: 'Spanish', flag: 'url(imgs/flags/es.svg)', code: 'es' },
  ]);

  constructor() {}
}
