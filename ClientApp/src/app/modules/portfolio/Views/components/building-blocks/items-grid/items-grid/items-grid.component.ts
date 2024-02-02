import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item.model';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss']
})
export class ItemsGridComponent implements OnInit {

  @Input() items: Item[] = [];
  currentIndexInFocus: number = -1;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
    
  }

  setItemInFocus(idx:number){
    if(idx == this.currentIndexInFocus) this.resetItemInFocus()
    else this.currentIndexInFocus = idx
  }
  resetItemInFocus(){
    this.currentIndexInFocus = -1
  }

}
