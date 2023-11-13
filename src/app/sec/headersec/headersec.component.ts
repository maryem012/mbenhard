import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ContentSecService } from 'src/app/services/content-sec.service';

@Component({
  selector: 'app-headersec',
  templateUrl: './headersec.component.html',
  styleUrls: ['./headersec.component.scss']
})
export class HeadersecComponent implements OnInit {
  @Input() pageTitle: string="home";
  content: any;
  @Input() url: string | undefined;
  selectedLang: string = ''; // Add a selectedLang property to track the active language
  isOverlayVisible=false;
  constructor(private http: HttpClient, private contentService:ContentSecService) { }

  ngOnInit(): void {
this.getContent()
  }

  changeLang(lang: string): void {
    this.selectedLang = lang;
  }

  logoAnim(): void {
  }

  toggleMobi(): void {
    this.isOverlayVisible = !this.isOverlayVisible;
    console.log("Menu Visibility Toggled:", this.isOverlayVisible); // Add this for debugging
  }
  isMobile(): boolean {
    return window.innerWidth <= 768; // Adjust the breakpoint as needed
  }
  getContent(){
    this.contentService.getContent().subscribe((data: any) => {
      this.content = data.header;
    });
  }
}
