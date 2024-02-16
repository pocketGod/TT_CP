import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectTypes } from 'src/app/models/Enums.model';
import { Item } from 'src/app/models/Item.model';
import { ActivityTrackerService } from 'src/app/modules/shared/services/activity-tracker.service';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss']
})
export class ItemsGridComponent implements OnInit {

  @Input() items: Item[] = [];
  currentIndexInFocus: number = -1;

  siteSection: ProjectTypes = ProjectTypes.Other;
  private subscriptions: Subscription = new Subscription();

  
  constructor(private activityTracker:ActivityTrackerService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.activityTracker.siteSection$.subscribe(
      (section: ProjectTypes) => {
        this.siteSection = section;
      }
    ));
  }

  setItemInFocus(idx:number){
    if(idx == this.currentIndexInFocus) this.resetItemInFocus()
    else this.currentIndexInFocus = idx
  }
  resetItemInFocus(){
    this.currentIndexInFocus = -1
  }

}
