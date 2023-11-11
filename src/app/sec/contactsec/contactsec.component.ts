import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactsec',
  templateUrl: './contactsec.component.html',
  styleUrls: ['./contactsec.component.scss']
})
export class ContactsecComponent implements OnInit, AfterViewChecked {

  pageTitle: string = 'Contact';
  year: number = new Date().getFullYear();
  content: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.http.get('./assets/json/datasec.json').subscribe((data: any) => {
      this.content = data.contact;
    });

    // Handle the class toggling without jQuery
    const overlayMobi = document.querySelector('.overlay-mobi') as HTMLElement;
    overlayMobi.style.transition = 'transform 0.4s';
    overlayMobi.style.transform = 'translateY(-100%)';

    const menuButton = document.querySelector('header .btn-menu a') as HTMLElement;
    menuButton.classList.remove('active');
  }

  ngAfterViewChecked(): void {
  }

}
