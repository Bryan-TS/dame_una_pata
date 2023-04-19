import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngBootstrapApp';
  active = 1;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public isCollapsed = false;
  public isMenuCollapsed = true;
}
