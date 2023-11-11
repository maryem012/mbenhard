import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  pageTitle: string = 'Projects';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const itemElements = this.el.nativeElement.querySelectorAll('.projects-page .item');

    itemElements.forEach((item: HTMLElement) => {
      item.classList.add('item-anim');
      this.animateItem(item);
    });

    window.scrollTo(0, 0);

  }

  private animateItem(item: HTMLElement): void {
    const animationDuration = 600;
    const startHeight = 0;
    const finalHeight = 36.5625 * 16;

    this.renderer.setStyle(item, 'marginBottom', `${startHeight}px`);
    this.renderer.setStyle(item, 'height', `${startHeight}px`);
    this.renderer.setStyle(item, 'backgroundPositionY', '-150px');

    setTimeout(() => {
      this.renderer.setStyle(item, 'marginBottom', '0');
      this.renderer.setStyle(item, 'height', `${finalHeight}px`);
      this.renderer.setStyle(item, 'backgroundPositionY', '-150px');
    }, animationDuration);
  }
}
