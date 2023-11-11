import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-alt-sec',
  templateUrl: './project-alt.component.html',
  styleUrls: ['./project-alt.component.scss']
})
export class ProjectAltComponent implements OnInit {

  id: number = 0;
  pagetitle: string = '';
  project: any;
  url: string = '';
  isOverlayVisible = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.id = idParam ? parseInt(idParam) : 0;
      this.url = '/projectalt/' + this.id;

      this.http.get('./assets/json/dataen.json').subscribe((data: any) => {
        this.project = data.projects.find((p: { id: number }) => p.id === this.id);
        this.pagetitle = 'Projects — ' + this.project.title;
      });
    });

    this.isOverlayVisible = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
   
  }

  toggleOverlay(): void {
    this.isOverlayVisible = !this.isOverlayVisible;
  }

  setActive(): void {
    // Handle setting active state
  }

  circleFadeIn(): void {
    // Handle circle fade in
  }

  circleFadeOut(): void {
    // Handle circle fade out
  }

  private scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
