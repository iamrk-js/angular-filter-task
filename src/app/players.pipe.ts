import { Pipe, PipeTransform } from '@angular/core';
import { iPlayer } from './players';

@Pipe({
  name: 'players'
})
export class PlayersPipe implements PipeTransform {

  transform(items: iPlayer[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (searchText) {
      return items.filter(cont => {
        return cont.team.toLowerCase().startsWith(searchText)
      })
    }else{
      return items
    }
     
  }

}
