import { Component, OnInit } from '@angular/core';
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
  isLoading:boolean = true;
  dictionary!: DictionaryEntry[];

  constructor(private itemsService: ItemsService, private contentService: ContentService) { }

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe({
      next: (data) => {
        if(data && data.length){
          this.items = data;

          // just for testing with a single obj
          this.items.push(data[0])
          this.items.push(data[0])
          this.items.push(data[0])
          this.items.push(data[0])
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
    
  }


  updateLoadingFlag(){
    if(this.items?.length && this.dictionary?.length){
      this.isLoading = false
    }
  }


}
