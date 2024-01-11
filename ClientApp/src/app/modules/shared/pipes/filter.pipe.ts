import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterPipe<T> implements PipeTransform {
  transform(items: T[], field: keyof T, value: string): T[] {
    if (!items) return [];
    if (!value || !field) return items;

    return items.filter(singleItem => {
      const itemFieldValue = singleItem[field];
      if (itemFieldValue === null || itemFieldValue === undefined) {
        return false;
      }

      const itemFieldValueString = (itemFieldValue as unknown as { toString(): string }).toString().toLowerCase();
      return itemFieldValueString.includes(value.toLowerCase());
    });
  }
}
