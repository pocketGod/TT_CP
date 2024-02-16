import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/Item.model';
import { ToastService } from 'src/app/modules/shared/services/toast.service';

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
  activeImgForPopup!:string;
  isPopUpOpen:boolean = false;

  constructor(private sanitizer: DomSanitizer, private router: Router,private toastService: ToastService) { }

  ngOnInit(): void {
    this.activeImgForPopup = this.item.images[0] || ''
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

  openImgPopup(event:Event,url:string){
    this.activeImgForPopup = url;
    this.isPopUpOpen = true;
    event.stopPropagation()
  }

  closeImgPopup(){
    this.isPopUpOpen = false;
  }

  copyUrlToSingleItem(event: Event) {
    event.stopPropagation();
    // Assuming this.item.name could contain characters that need encoding
    const itemName = encodeURIComponent(this.item.title.english.replace(/ /g, '_'));
    const projectUrl = this.router.createUrlTree(['/item', itemName]).toString();
    navigator.clipboard.writeText(window.location.origin + projectUrl)
      .then(() => this.toastService.show('URL copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  }
  

}
