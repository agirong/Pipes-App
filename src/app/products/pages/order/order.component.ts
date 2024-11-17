import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUppercase: boolean = false;

  public files: number = 1;

  public heroes : Hero[] = [
    {
      name:'Superman',
      cantFly: true,
      color:Color.blue
    },
    {
      name:'Batman',
      cantFly: false,
      color:Color.black
    },
    {
      name:'DareDevil',
      cantFly: false,
      color:Color.red
    },
    {
      name:'Robin',
      cantFly: false,
      color:Color.red
    },
    {
      name:'Linterna Verde',
      cantFly: true,
      color:Color.green
    }
  ];

  toggleUperCase(){
    this.isUppercase = !this.isUppercase;
  }

}
