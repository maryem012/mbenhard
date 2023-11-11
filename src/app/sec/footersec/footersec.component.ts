import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentSecService } from 'src/app/services/content-sec.service';

@Component({
  selector: 'app-footersec',
  templateUrl: './footersec.component.html',
  styleUrls: ['./footersec.component.scss']
})
export class FootersecComponent implements OnInit {

  year: number = new Date().getFullYear();
  content: any;

  constructor(private http: HttpClient,private contentService:ContentSecService) { }

  ngOnInit(): void {
    this.getContent();

  }

  getContent(){
    this.contentService.getContent().subscribe((data: any) => {
      this.content = data.footer;
    });
  }
}


