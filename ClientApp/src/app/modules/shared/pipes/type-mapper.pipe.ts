import { Pipe, PipeTransform } from '@angular/core';
import { ProjectTypes } from 'src/app/models/Enums.model';

@Pipe({
  name: 'typeMapper'
})
export class TypeMapperPipe implements PipeTransform {

  transform(value: ProjectTypes): string {
    switch (value) {
      case ProjectTypes.Commercial:
        return "Commercial";
      case ProjectTypes.MusicVideo:
        return "Music Video";
      case ProjectTypes.ShortFilm:
        return "Short Film";
      case ProjectTypes.FeatureFilm:
        return "Feature Film";
      case ProjectTypes.Other:
        return "Other";
    }
    return "";
  }

}
