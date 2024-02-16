import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { DictionaryEntry } from 'src/app/models/Content.model';
import { ContentService } from '../services/content.service';
import { LanguageService } from '../services/language.service';
import { ContentHelper } from '../helpers/content.helper';

@Directive({
  selector: '[dictionaryLocalize]'
})
export class DictionaryLocalizeDirective {

  @Input('dictionaryLocalize') key!: string;

  constructor(
    private el: ElementRef, 
    private contentService: ContentService, 
    private langService: LanguageService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
      ContentHelper.updateElementText(this.el.nativeElement, this.contentService.currentDictionary, this.key, null, this.langService);
    }
  }

}
