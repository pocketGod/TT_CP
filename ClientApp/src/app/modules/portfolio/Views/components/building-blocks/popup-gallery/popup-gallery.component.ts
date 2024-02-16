import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-gallery',
  templateUrl: './popup-gallery.component.html',
  styleUrls: ['./popup-gallery.component.scss']
})
export class PopupGalleryComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() activeImage:string = ''

  @Output() close = new EventEmitter<void>();
  

  constructor() { }

  ngOnInit(): void {
  }

  stopProp(event:Event){
    event.stopPropagation()
  }

  navigate(event:Event, direction: 'next' | 'prev'): void {
    this.stopProp(event)

    const currentIndex = this.images.indexOf(this.activeImage);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.activeImage = this.images[nextIndex];
    } else {
      const prevIndex = (currentIndex - 1 + this.images.length) % this.images.length;
      this.activeImage = this.images[prevIndex];
    }
  }

  closeGallery(event:Event): void {
    this.stopProp(event)
    this.close.emit(); 
  }
}
