import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <button 
      (click)="themeService.toggleTheme()" 
      class="p-2 rounded-full hover:bg-secondary-accent/20 transition-colors flex items-center justify-center text-primary-text"
      [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
      title="Toggle Theme">
      @if (themeService.isDarkMode()) {
        <mat-icon aria-hidden="true">light_mode</mat-icon>
      } @else {
        <mat-icon aria-hidden="true">dark_mode</mat-icon>
      }
    </button>
  `
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
}
