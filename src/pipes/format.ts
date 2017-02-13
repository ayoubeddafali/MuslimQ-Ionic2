import {Injectable, Pipe} from '@angular/core';

@Pipe({
  name: 'formatSurah'
})
@Injectable()
export class Format   {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value) {
    value = value + ''; // make sure it's a string
    var items = value.split(" ")
    items.shift()
    return items.join(" ");
  }
}
