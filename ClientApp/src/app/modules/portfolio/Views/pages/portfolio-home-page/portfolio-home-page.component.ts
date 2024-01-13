import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/Item.model';
import { ItemsService } from '../../../services/items.service';
import { ContentService } from 'src/app/modules/shared/services/content.service';
import { DictionaryEntry } from 'src/app/models/Content.model';

@Component({
  selector: 'app-portfolio-home-page',
  templateUrl: './portfolio-home-page.component.html',
  styleUrls: ['./portfolio-home-page.component.scss']
})
export class PortfolioHomePageComponent implements OnInit {

  items: Item[] = [];
  dictionary: DictionaryEntry[] = [];

  constructor(private itemsService: ItemsService, private contentService: ContentService) { }

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe({
      next: (data) => {
        if(data && data.length){
          this.items = data;
          console.log('items: ',data);
        }
      },
      error: (err) => console.error(err),
    });
    this.contentService.dictionary$.subscribe(data => {
      if(data && data.length){
        this.dictionary = data;
        console.log('dict: ',data);
      }
    });
  }


  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  playVideo(): void {
    this.videoPlayer.nativeElement.play();
  }

  pauseVideo(): void {
    this.videoPlayer.nativeElement.pause();
  }

}
