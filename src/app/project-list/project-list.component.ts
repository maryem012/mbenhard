import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentMainService } from '../services/content-main.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: any;
  content:any;
  constructor(private http: HttpClient,private contentService: ContentMainService) { }

  ngOnInit(): void {
   this.getContent()
  }
  anim(project: any): void {
    console.log(`Animating project ${project.title}`);
  }

getContent(){
  this.contentService.getContent().subscribe((data: any) => {
    this.projects = data.projects;})
}
}

