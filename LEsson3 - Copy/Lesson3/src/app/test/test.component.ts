import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  message: string = 'Default';
  selectedFontSize: number = 12;
  selectedColour: string = "#000";

}
