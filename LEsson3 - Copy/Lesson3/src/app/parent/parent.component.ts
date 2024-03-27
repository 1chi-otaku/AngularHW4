import { Component } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  price = 5250; 
  kol = 22;

  products = [
    {name:'Сок', price: 54, quantity: 1},
    {name:'Чай', price: 76, quantity: 5},
    {name:'Хлеб', price: 30, quantity: 19},
    {name:'Молоко', price: 80, quantity: 67}
];


  
getQuantity(){
  return this.products.reduce((sumQuantity, item) => sumQuantity + item.quantity, 0);
}

getTotalSumm(){
  return this.products.reduce((sumQuantity, item) => sumQuantity + item.quantity * item.price, 0);
}



 total = this.getTotalSumm();
 clicks  = this.getQuantity();

 onChanged(event: any){
  event == 1 ? this.clicks++: this.clicks--;
 }


}
