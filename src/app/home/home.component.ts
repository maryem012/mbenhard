import { Component, OnInit, AfterViewChecked, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentMainService } from '../services/content-main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  pageTitle: string = 'home';
  content: any;
  contentHome: any;
heading:any;
  constructor(private http: HttpClient, private renderer: Renderer2, private elementRef: ElementRef ,private contentService: ContentMainService) { }

  ngOnInit(): void {
this.getContent();
    // Remove jQuery for scrolling to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove jQuery for sliding up .overlay-mobi
    this.slideUpOverlayMobi();

    // Remove jQuery for handling social dots
    this.setupSocialDots();
  }
  getContent(){
    this.contentService.getContent().subscribe((data: any) => {
      this.content = data.home; // You can access the home section in your JSON data
   if (this.content && this.content.title) {
    console.log("the content is " + this.content.title);
    this.content.headings = this.content.headings.split(' ');

    console.log(this.content.headings)
  }

    });
  }

  ngAfterViewChecked(): void {
  }

  private slideUpOverlayMobi(): void {
    const overlayMobi = this.elementRef.nativeElement.querySelector('.overlay-mobi');
    this.renderer.setStyle(overlayMobi, 'display', 'none');
  }

  private setupSocialDots(): void {
    const socialItems = this.elementRef.nativeElement.querySelectorAll('.social li');
    const socialDot = this.elementRef.nativeElement.querySelector('.social .social-dot');

    socialItems.forEach((item: any, index: number) => {
      this.renderer.listen(item, 'mouseenter', () => {
        this.renderer.setStyle(socialDot, 'display', 'block');
        const topValue = (index * 2.25 + 0.75) + 'rem';
        this.renderer.setStyle(socialDot, 'top', topValue);
      });
    });

    this.renderer.listen(socialItems[0], 'mouseleave', () => {
      this.renderer.setStyle(socialDot, 'display', 'none');
    });
  }
}
