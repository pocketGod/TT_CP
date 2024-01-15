import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { LanguageString } from 'src/app/models/Content.model';
import { LanguageService } from '../services/language.service';

@Directive({
  selector: '[Localize]'
})
export class LocalizeDirective {

  @Input('Localize') text!: LanguageString;

  constructor(private el: ElementRef, private langService: LanguageService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.updateText();
    }
  }
      
  private updateText(): void {
    const currentLang = this.langService.getCurrentLang();
    const text = this.text[currentLang];
    this.el.nativeElement.innerText = text;
  }
    

}
