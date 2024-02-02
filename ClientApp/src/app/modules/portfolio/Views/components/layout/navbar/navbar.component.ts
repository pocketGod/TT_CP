import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectTypes } from 'src/app/models/Enums.model';
import { ActivityTrackerService } from 'src/app/modules/shared/services/activity-tracker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  siteSection:ProjectTypes = ProjectTypes.Other;
  constructor(private acTrack:ActivityTrackerService) {
    
    this.siteSection = this.acTrack.siteSection
    
   }


  ngOnInit(): void {
  }

  setSiteSection(section:ProjectTypes){
    this.acTrack.setSiteSection(section)
    this.siteSection = section
  }



}
