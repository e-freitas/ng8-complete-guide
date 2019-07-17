import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng8-complete-guide';
  loadedFeature: string = "RECIPE";
  public RECIPE: string = "RECIPE";
  public SHOPPING: string = "SHOPPING";

  public loadFeature(feature: string) {
    this.loadedFeature = feature;
  }
}
