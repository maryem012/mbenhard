import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentSecService } from 'src/app/services/content-sec.service';

@Component({
  selector: 'app-projects-sec',
  templateUrl: './projects-sec.component.html',
  styleUrls: ['./projects-sec.component.scss']
})
export class ProjectsSecComponent implements OnInit, AfterViewChecked {
  id: any;
  pageTitle: string = "Projets";
  project: any;
  url: any;
  projects: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private renderer: Renderer2, private contentService: ContentSecService) { }

  ngOnInit(): void {
    this.getContent()

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.renderer.addClass(document.querySelector('.project-page header'), 'dark');



  }

  ngAfterViewChecked(): void {
  }

  // You can define your own methods for other UI interactions without jQuery.
  setActive(): void {
    // Your code for toggling "active" class
  }

  circleFadeIn(): void {
    // Your code for fading in a circle
  }

  circleFadeOut(): void {
    // Your code for fading out a circle
  }
  getContent() {
    this.contentService.getContent().subscribe((data: any) => {
      this.projects = data.projects
    })
  }
}
