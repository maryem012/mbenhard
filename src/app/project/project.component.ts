import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent  implements OnInit, AfterViewChecked {
  id: number=0;
  pageTitle:any;
  project: any;
  url: any;
projecttitle:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.id = this.route.snapshot.params['id'];
    this.url = '/lang/project/' + this.id;

    const projectPageHeader = document.querySelector('.project-page header') as HTMLElement;
    projectPageHeader.classList.add('dark');

    this.http.get("./assets/json/dataen.json").subscribe((data: any) => {
      this.project = data.projects.find((p: { id: any; }) => p.id === this.id);
      this.pageTitle = `Projects — ${this.project.title}`;
    });

    const overlayMobi = document.querySelector('.overlay-mobi') as HTMLElement;
    overlayMobi.style.transition = 'transform 0.4s';
    overlayMobi.style.transform = 'translateY(-100%)';

    const menuButton = document.querySelector('header .btn-menu a') as HTMLElement;
    menuButton.classList.remove('active');
  }

  ngAfterViewChecked(): void {
  }

  setActive(): void {
    const level3P = document.querySelectorAll('.project-page .level3 p') as NodeListOf<HTMLElement>;
    const level3Img = document.querySelectorAll('.project-page .level3 img') as NodeListOf<HTMLElement>;

    level3P.forEach((p) => p.classList.toggle('active'));
    level3Img.forEach((img) => img.classList.toggle('active'));
  }

  circleFadeIn(): void {
    const circle2 = document.querySelector('.circle2') as HTMLElement;
    circle2.style.transition = 'opacity 0.4s';
    circle2.style.opacity = '1';
  }

  circleFadeOut(): void {
    const circle2 = document.querySelector('.circle2') as HTMLElement;
    circle2.style.transition = 'opacity 0.4s';
    circle2.style.opacity = '0';
  }
}
