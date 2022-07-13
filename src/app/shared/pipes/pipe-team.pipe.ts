import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTeam',
  pure: false
})
export class TeamPipe implements PipeTransform {

  transform(value: any, args?: any): unknown {
    if(value){
      return value.replace(/\n/gi,'<br/>\n')
    }
    return value.replace(/\n/gi,'<br/>\n');
  }

}
