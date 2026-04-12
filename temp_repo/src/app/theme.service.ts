import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  
  // Signal to hold the current theme
  readonly isDarkMode = signal<boolean>(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Load from local storage
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
        this.isDarkMode.set(false);
      } else {
        this.isDarkMode.set(true);
      }

      // Effect to update the DOM and localStorage when the signal changes
      effect(() => {
        const isDark = this.isDarkMode();
        if (isDark) {
          document.documentElement.classList.remove('light-mode');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  toggleTheme() {
    this.isDarkMode.update(dark => !dark);
  }
}
