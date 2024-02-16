import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item.model';
import { ItemsService } from '../../../services/items.service';
import { ContentService } from 'src/app/modules/shared/services/content.service';
import { DictionaryEntry, MediaEntry } from 'src/app/models/Content.model';

@Component({
  selector: 'app-portfolio-home-page',
  templateUrl: './portfolio-home-page.component.html',
  styleUrls: ['./portfolio-home-page.component.scss']
})
export class PortfolioHomePageComponent implements OnInit {

  items: Item[] = [];
  isLoading:boolean = true;
  dictionary!: DictionaryEntry[];
  media!: MediaEntry[];

  constructor(private itemsService: ItemsService, private contentService: ContentService) { }

  ngOnInit(): void {    
    this.itemsService.getAllItems().subscribe({
      next: (data) => {
        if(data && data.length){
          this.items = data;
          this.updateLoadingFlag()
        }
      },
      error: (err) => console.error(err),
    });
    this.contentService.dictionary$.subscribe((dic)=>{
      if(dic && dic.length){
        this.dictionary = dic
        this.updateLoadingFlag()
      }
    })

    this.contentService.media$.subscribe((media)=>{
      if(media && media.length){
        this.media = media
        this.updateLoadingFlag()
      }
    })
    
  }


  updateLoadingFlag(){
    // console.log(this.items);
    // console.log(this.dictionary);
    // console.log(this.media);
    
    if(this.items?.length && (this.dictionary?.length || this.media?.length )){
      
      this.isLoading = false
    }
  }


}
