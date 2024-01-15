import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item.model';
import { ItemsService } from '../../../services/items.service';
import { ContentService } from 'src/app/modules/shared/services/content.service';

@Component({
  selector: 'app-portfolio-home-page',
  templateUrl: './portfolio-home-page.component.html',
  styleUrls: ['./portfolio-home-page.component.scss']
})
export class PortfolioHomePageComponent implements OnInit {

  items: Item[] = [];

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
        }
      },
      error: (err) => console.error(err),
    });
  }


}
