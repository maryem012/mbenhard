import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-agency-sec',
  templateUrl: './agency-sec.component.html',
  styleUrls: ['./agency-sec.component.scss']
})
export class AgencySecComponent implements OnInit, AfterViewChecked {
  pageTitle: string = 'L\'Agence';
  content: any;
  isOverlayVisible = true;
  isParagraphActive = false; // Add variable for paragraph class
  isCircleVisible = false; // Add variable for circle visibility
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.http.get("./assets/json/datasec.json").subscribe((data: any) => {
      this.content = data.agency;
      this.setAgencyHeaderClass(true);
      this.addScrollListener();
    });
    this.hideMobileOverlay();
    this.removeActiveClassFromBtnMenu();
  }

  ngAfterViewChecked(): void {
  }

  setActive(): void {
    this.toggleActiveClass('.agency-page .level4 p');
    this.toggleActiveClass('.agency-page .level4 img');
  }

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private setAgencyHeaderClass(isDark: boolean) {
  }

  private hideMobileOverlay() {
  }

  private removeActiveClassFromBtnMenu() {
  }

  private toggleActiveClass(selector: string) {
  }

  private addScrollListener() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  }

  private handleScroll() {
  }
}
