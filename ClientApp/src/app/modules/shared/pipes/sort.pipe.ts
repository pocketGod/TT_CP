import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe<T> implements PipeTransform {
  transform(items: T[], field: keyof T, order: string = 'asc'): T[] {
    if (!items) return [];
    if (!field) return items;
    if (order === 'asc') {
      return [...items].sort((a, b) => (a[field] > b[field] ? 1 : -1));
    } else {
      return [...items].sort((a, b) => (a[field] < b[field] ? 1 : -1));
    }
  }
}