import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-color-mode',
  imports: [CommonModule],
  templateUrl: './color-mode.component.html',
  styleUrl: './color-mode.component.scss',
})
export class ColorModeComponent {
  private currentTheme = new BehaviorSubject<'light' | 'dark'>('light');
  currentTheme$ = this.currentTheme.asObservable();

  mode: string = 'light';

  constructor() {
    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    this.setTheme(savedTheme);
  }

  toggleTheme() {
    this.mode = this.mode == 'light' ? 'dark' : 'light';
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private setTheme(theme: 'light' | 'dark') {
    this.currentTheme.next(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  get icon() {
    return this.currentTheme.value === 'light' ? (this.mode = 'light') : 'dark';
  }
}
