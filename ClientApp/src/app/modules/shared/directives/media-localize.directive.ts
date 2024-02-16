import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ContentService } from '../services/content.service';

@Directive({
  selector: '[MediaLocalize]'
})
export class MediaLocalizeDirective {

  @Input('MediaLocalize') key!: string;

  constructor(
    private el: ElementRef, 
    private contentService: ContentService, 
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
      const mediaEntry = this.contentService.currentMedia.find(entry => entry.key === this.key);
      if (mediaEntry) {
        this.updateElementSrc(mediaEntry.url);
      }
    }
  }

  private updateElementSrc(url: string): void {
    this.el.nativeElement.src = url;
  }

}
