import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MyBooks';
}
