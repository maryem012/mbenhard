import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AgencyComponent } from './agency/agency.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsecComponent } from './sec/contactsec/contactsec.component';
import { HomeSecComponent } from './sec/home-sec/home-sec.component';
import { ProjectAltComponent } from './project-alt/project-alt.component';
import { AgencySecComponent } from './sec/agency-sec/agency-sec.component';
import { ProjectsSecComponent } from './sec/projects-sec/projects-sec.component';
import { ProjectAltSecComponent } from './sec/project-alt-sec/project-alt-sec.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectSecComponent } from './sec/project-sec/project-sec.component';

const routes: Routes = [   {path: '', component: HomeComponent},
{path: 'projects', component: ProjectsComponent, data: { animation: 'projects' }},
{path: 'foot', component: FooterComponent},

{path: 'contact', component: ContactComponent, data: { animation: 'contact'}},
{path: 'agency', component: AgencyComponent, data: { animation: 'agency' }},
{path: 'project/:id', component: ProjectComponent},
{path: 'projectalt/:id', component: ProjectAltComponent},
{path: 'lang', component: HomeSecComponent},
{path: 'lang/agency', component: AgencySecComponent, data: { animation: 'agency' }},
{path: 'lang/contact', component: ContactsecComponent, data: { animation: 'contact'}},
{path: 'lang/projects', component: ProjectsSecComponent},
{path: 'lang/project/:id', component: ProjectSecComponent, data: { animation: 'projects' }},
{path: 'lang/projectalt/:id', component: ProjectAltSecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
