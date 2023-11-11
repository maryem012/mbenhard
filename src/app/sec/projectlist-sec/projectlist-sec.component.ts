import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ContentSecService } from 'src/app/services/content-sec.service';

@Component({
  selector: 'app-projectlist-sec',
  templateUrl: './projectlist-sec.component.html',
  styleUrls: ['./projectlist-sec.component.scss']
})
export class ProjectlistSecComponent implements AfterViewInit {
  projects: any;

  constructor(private http: HttpClient, private router: Router ,private contentService:ContentSecService) {}

  ngAfterViewInit(): void {
  this.getContent()
  }

  anim(project: any): void {
    // Your animation logic here
    // For example, you can change the project's opacity
    project.opacity = 0.7;

    // After the animation, navigate to the project details page
    setTimeout(() => {
      this.router.navigate(['/lang', project.layout, project.id]);
    }, 500); // Delay for 500 milliseconds (adjust as needed)
  }
  getContent() {
    this.contentService.getContent().subscribe((data: any) => {
      this.projects = data.projects
    })
  }
}
