// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'join',
// })
// export class JoinPipe implements PipeTransform {
//   transform(array: any, start?: any, finish?: any): any {
//     let result = array;
//     if (start !== undefined) {
//       if (finish !== undefined) {
//         result = array.slice(start, finish);
//       }
//     } 
//     else {
//       result = array.slice(start, result.length);
//     }
//     return result.join(", ");
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(array: any, delimiter?: any, start?: any, end?: any): any {
    let result = array;
    // let comma = ', ';
    if(start!==undefined){
        if(end!==undefined){
            result = array.slice(start, end);
        }
        else{
            result = array.slice(start, result.length);
        }
    }
    return result.join(delimiter);
  }
}
