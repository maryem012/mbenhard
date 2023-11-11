import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentSecService } from 'src/app/services/content-sec.service';

@Component({
  selector: 'app-home-sec',
  templateUrl: './home-sec.component.html',
  styleUrls: ['./home-sec.component.scss']
})
export class HomeSecComponent implements OnInit, AfterViewChecked {

   socialMediaListItems = document.querySelectorAll('.social li');
   socialDotElement = document.querySelector('.social .social-dot');

  pageTitle: string = 'home';
  content: any;
  dataUrl = 'assets/datasec.json';

  constructor(private http: HttpClient, private contentService:ContentSecService) { }

  ngOnInit(): void {
    this.getContent()
    this.initSocialMediaIcons();
  }
  ngAfterViewChecked(): void {
    //$('html, body').scrollTop(0);
  }

  private initSocialMediaIcons() {
    this.socialMediaListItems.forEach((listItem, i) => {
      listItem.addEventListener('mouseenter', () => {
      });
      listItem.addEventListener('mouseleave', () => {
      });
    });
  }

  getContent(){
    this.contentService.getContent().subscribe((data: any) => {
      this.content = data.home; // You can access the home section in your JSON data
    });
  }


}
