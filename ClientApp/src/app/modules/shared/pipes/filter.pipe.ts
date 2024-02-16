import { Pipe, PipeTransform } from '@angular/core';
import { ProjectTypes } from 'src/app/models/Enums.model';

@Pipe({
  name: 'filterBy'
})
export class FilterPipe<T extends { type: ProjectTypes }> implements PipeTransform {
  transform(items: T[], field: keyof T, value: ProjectTypes): T[] {
    if (!items) return [];
    if (!value) return items;

    if (value === ProjectTypes.Other) return items;

    if (value === ProjectTypes.ShortFilm || value === ProjectTypes.FeatureFilm) {
      return items.filter(item => {
        const itemType = item[field] as unknown as ProjectTypes;
        return itemType === ProjectTypes.ShortFilm || itemType === ProjectTypes.FeatureFilm;
      });
    }

    return items.filter(item => {
      const itemFieldValue = item[field] as unknown as ProjectTypes;
      return itemFieldValue === value;
    });
  }
}
