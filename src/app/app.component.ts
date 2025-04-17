import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleComponent } from './toggle/toggle.component';
import { OverviewComponent } from './overview/overview.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToggleComponent, OverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MyBooks';
}
