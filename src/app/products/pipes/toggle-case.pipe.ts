import { Pipe, PipeTransform } from '@angular/core';

//aaron | toggleCase = 'AARON'
//AARON | toggleCase = 'aaron'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
