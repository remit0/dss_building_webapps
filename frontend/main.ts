import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// This function starts the Angular application using our main component
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
