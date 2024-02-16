import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/Item.model';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'app-single-item-page',
  templateUrl: './single-item-page.component.html',
  styleUrls: ['./single-item-page.component.scss']
})
export class SingleItemPageComponent implements OnInit {

  item!: Item;
  isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private router:Router, private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.isLoading = true;

    const itemNameEncoded = this.route.snapshot.paramMap.get('name');
    if (itemNameEncoded) {
      const itemName = decodeURIComponent(itemNameEncoded).replace(/_/g, ' ');
      if (itemName) {
        this.itemsService.getAllItems().subscribe((items: Item[]) => {
          let item = items.find(i => i.title.english === itemName);
          if(!item) {
            this.router.navigate(['/'])
            return
          }
          this.item = item;
          this.isLoading = false;
        });
      }
    }
   
  }

}
