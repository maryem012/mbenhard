import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ContentMainService } from '../services/content-main.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
})
export class AgencyComponent implements OnInit, AfterViewChecked {
  pageTitle: string = 'The Agency';
  content: any;
  isOverlayVisible = true;
  isParagraphActive = false; // Add variable for paragraph class
  isCircleVisible = false; // Add variable for circle visibility

  constructor(private contentService: ContentMainService) {}

  ngOnInit(): void {
    this.contentService.getContent().subscribe((data) => {
      this.content = data.agency;
    });

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewChecked(): void {
    // This method is currently commented out, which is fine.
  }

  setActive(): void {
    // Toggle the active class for the paragraph
    this.isParagraphActive = !this.isParagraphActive;

    // Toggle the active class for the image
    this.isCircleVisible = !this.isCircleVisible;
  }
}
