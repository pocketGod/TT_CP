import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Item } from 'src/app/models/Item.model';

@Component({
  selector: 'app-item-cell',
  templateUrl: './item-cell.component.html',
  styleUrls: ['./item-cell.component.scss']
})
export class ItemCellComponent implements OnInit, OnChanges {

  @Input() item!: Item;
  @Input() index!: number
  @Input() collapse: boolean = true;
  safeVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.item && this.item.video) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.video);
    }
  }


  
  @ViewChild('videoBackground') videoBackground!: ElementRef;

  playVideo(): void {
    this.videoBackground.nativeElement.play();
  }

  pauseVideo(): void {
    this.videoBackground.nativeElement.pause();
  }


}
