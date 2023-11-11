import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentMainService } from 'src/app/services/content-main.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slide', [
      state('open', style({ display: 'block', height: '*' })),
      state('closed', style({ display: 'none', height: '0' })),
      transition('closed => open', [animate('400ms ease-in-out')]),
      transition('open => closed', [animate('400ms ease-in-out')])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string = '';
  content: any;
  @Input() url: string = '';
  isOverlayVisible = false;

  constructor(private http: HttpClient, private contentService: ContentMainService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe((data: any) => {
      this.content = data.header;
    });
  }

  changeLang(e: any, lang: any): void {
    const langLinks = document.querySelectorAll('.lang a');
    langLinks.forEach((elem) => {
      this.renderer.removeClass(elem, 'active');
    });
    this.renderer.addClass(e.target, 'active');
  }

  logoAnim(): void {
    let elem = document.querySelector('.page-title');
    elem?.classList.toggle('active');
  }

  toggleMobi(): void {
    this.isOverlayVisible = !this.isOverlayVisible;
  }
}
