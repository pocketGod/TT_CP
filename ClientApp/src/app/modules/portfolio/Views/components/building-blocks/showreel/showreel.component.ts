import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-showreel',
  templateUrl: './showreel.component.html',
  styleUrls: ['./showreel.component.scss']
})
export class ShowreelComponent implements OnInit, AfterViewInit {

  @ViewChild('showreelVideo') showreelVideo!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit(): void {
    this.setVideoVolume();
  }

  ngOnInit(): void {
  }

  private setVideoVolume(): void {
    const video: HTMLVideoElement = this.showreelVideo.nativeElement;
    video.volume = 0;
    video.onplay = () => {
      video.muted = true;
      video.volume = 0;
    };

   
  }

}
