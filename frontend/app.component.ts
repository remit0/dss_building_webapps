import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This matches the <app-root> tag in index.html
  standalone: true,      // Marks this as a modern, standalone component
  template: `<h1>Hello, World!</h1>` // The HTML to be rendered
})
export class AppComponent {
  // No logic needed for this simple example
}
