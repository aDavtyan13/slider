import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider';

  public _currentValues;
  onSliderChange(selectedValues: number[]) {
    this._currentValues = selectedValues;
  }
}
