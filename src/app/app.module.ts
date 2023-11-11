import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SecComponent } from './sec/sec.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { AgencyComponent } from './agency/agency.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectAltComponent } from './project-alt/project-alt.component';
import { ProjectsComponent } from './projects/projects.component';
import { AgencySecComponent } from './sec/agency-sec/agency-sec.component';
import { ContactsecComponent } from './sec/contactsec/contactsec.component';
import { FootersecComponent } from './sec/footersec/footersec.component';
import { HeadersecComponent } from './sec/headersec/headersec.component';
import { HomeSecComponent } from './sec/home-sec/home-sec.component';
import { ProjectAltSecComponent } from './sec/project-alt-sec/project-alt-sec.component';
import { ProjectSecComponent } from './sec/project-sec/project-sec.component';
import { ProjectlistSecComponent } from './sec/projectlist-sec/projectlist-sec.component';
import { ProjectsSecComponent } from './sec/projects-sec/projects-sec.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SecComponent,
    HomeComponent,
    ProjectListComponent,
    ProjectComponent,
    AgencyComponent,
    ContactComponent,
    ProjectAltComponent,
    ProjectsComponent,
    FootersecComponent,
    HeadersecComponent,
    ContactsecComponent,
    ProjectlistSecComponent,
    ProjectAltSecComponent,
    HomeSecComponent,
    ProjectSecComponent,
    ProjectsSecComponent,
    AgencySecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
