import { Pipe, PipeTransform } from '@angular/core';

//aaron | toggleCase = 'AARON'
//AARON | toggleCase = 'aaron'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper:boolean = false ): string {
    console.log({value,toUpper})
    if(toUpper){
      return value.toUpperCase();
    }
    else{
      return value
    }
  }
}
