import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentMainService } from '../services/content-main.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewChecked {

  pageTitle: string = 'Contact';
  year: number = new Date().getFullYear();
  content: any;

  constructor(private http: HttpClient, private contentService:ContentMainService) { }

  ngOnInit(): void {
this.getContent()
    };



  getContent(){
    this.contentService.getContent().subscribe((data: any) => {
      this.content = data.contact;
   })
  }
  ngAfterViewChecked(): void {
  }
}
