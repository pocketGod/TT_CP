import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Item } from 'src/app/models/Item.model';

@Component({
  selector: 'app-item-cell',
  templateUrl: './item-cell.component.html',
  styleUrls: ['./item-cell.component.scss']
})
export class ItemCellComponent implements OnInit, OnChanges {

  @ViewChild('videoBackground') videoBackground!: ElementRef;
  @Input() item!: Item;
  @Input() index!: number
  @Input() collapse: boolean = true;
  safeVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item && this.item && this.item.video) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.video);
    }
    if (changes.collapse) {
      this.handleVideoPlayback();
    }
  }

  handleVideoPlayback(): void {
    if (!this.collapse && this.videoBackground && this.videoBackground.nativeElement) {
      this.videoBackground.nativeElement.play();
    } else if (this.videoBackground && this.videoBackground.nativeElement) {
      this.videoBackground.nativeElement.pause();
    }
  }


  playVideo(): void {
    if (this.collapse) {
      this.videoBackground.nativeElement.play();
    }
  }

  pauseVideo(): void {
    if (this.collapse) {
      this.videoBackground.nativeElement.pause();
    }
  }


}
