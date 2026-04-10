import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-accessibility-notice',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="bento-tile mb-8 flex flex-row items-center gap-4 p-4 sm:p-6">
      <div class="bg-secondary-accent/20 p-3 rounded-full text-secondary-accent flex-shrink-0 flex items-center justify-center">
        <mat-icon aria-hidden="true">accessibility_new</mat-icon>
      </div>
      <p class="mb-0 text-sm sm:text-base text-bento-text">
        This website is designed to be accessible and calm for neurodivergent audiences and those with SEND/SEMH needs.
      </p>
    </div>
  `
})
export class AccessibilityNoticeComponent {}
