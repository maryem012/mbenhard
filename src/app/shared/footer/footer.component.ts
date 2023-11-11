import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentMainService } from 'src/app/services/content-main.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  content: any;
  constructor(private http: HttpClient,private contentService: ContentMainService) { }

  ngOnInit(): void {
   this.getContent()
  }


getContent(){
  this.contentService.getContent().subscribe((data: any) => {
    this.content = data.footer;})
}

}

