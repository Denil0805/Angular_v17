import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleRenderingPageComponent } from './core-components/sample-rendering-page/sample-rendering-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleRenderingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17_DemoProject';
}
