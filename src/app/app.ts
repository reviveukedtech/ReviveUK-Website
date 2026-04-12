import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {A11yModule, LiveAnnouncer} from '@angular/cdk/a11y';
import {ThemeToggleComponent} from './theme-toggle.component';
import {AccessibilityNoticeComponent} from './accessibility-notice.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [MatIconModule, ReactiveFormsModule, A11yModule, ThemeToggleComponent, AccessibilityNoticeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private fb = inject(FormBuilder);
  private liveAnnouncer = inject(LiveAnnouncer);

  assessmentForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  formSubmitted = signal(false);

  onSubmit() {
    if (this.assessmentForm.valid) {
      // Simulate sending email to hello@reviveuk.org.uk
      console.log('Sending form data to hello@reviveuk.org.uk:', this.assessmentForm.value);
      
      this.formSubmitted.set(true);
      this.liveAnnouncer.announce('Assessment form submitted successfully. We will get in touch soon.');
      this.assessmentForm.reset();
    } else {
      this.liveAnnouncer.announce('Please fill out all required fields correctly.');
    }
  }
}
