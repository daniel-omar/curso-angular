import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activo:boolean): string {
    // if (activo) {
    //   let pass="";
    //   for (let index = 0; index < value.length; index++) {
    //     pass=pass+"*";
    //   }
    //   value=pass;
    // }
    // return value;

    return (activo) ? '*'.repeat(value.length):value;
  }

}
