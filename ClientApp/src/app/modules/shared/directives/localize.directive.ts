import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { LanguageString } from 'src/app/models/Content.model';
import { LanguageService } from '../services/language.service';
import { ContentHelper } from '../helpers/content.helper';

@Directive({
  selector: '[Localize]'
})
export class LocalizeDirective {
  @Input('Localize') text!: LanguageString;

  constructor(
    private el: ElementRef, 
    private langService: LanguageService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      ContentHelper.updateElementText(this.el.nativeElement, null, null, this.text, this.langService);
    }
  }

}
