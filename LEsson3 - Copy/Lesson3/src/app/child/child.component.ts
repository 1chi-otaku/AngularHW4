import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() price: any;
  @Input() kol: any;

  @Input() product: any;

  @Output() onChanged = new EventEmitter();
  constructor() { }
  
}



