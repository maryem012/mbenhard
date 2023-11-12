import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-sec',
  templateUrl: './project-sec.component.html',
  styleUrls: ['./project-sec.component.scss']
})
export class ProjectSecComponent implements OnInit, AfterViewChecked {
  id: any;
  pageTitle:any;
  project: any;
  url: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

     this.id = this.route.snapshot.params['id'];
    this.url = `/project/${this.id}`;
    this.renderer.addClass(document.querySelector('.project-page header'), 'dark');

    this.http.get("./assets/json/datasec.json").subscribe((data: any) => {
      this.project = data.projects.find((p: { id: any; }) => p.id === this.id);
      this.pageTitle = `Projects — ${this.project.title}`;
    });

    // You can use Angular Renderer2 for any other DOM manipulation if needed.
  }

  ngAfterViewChecked(): void {
    // This method is empty in your original code, so no jQuery replacement is necessary.
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
}
