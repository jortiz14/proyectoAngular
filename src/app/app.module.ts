import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { BoxComponent } from './services/box/box.component';
import { HttpClientModule } from '@angular/common/http';
import { OnePostComponent } from './one-post/one-post.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { WhyusComponent } from './whyus/whyus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { TeamComponent } from './team/team.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    BoxComponent,
    OnePostComponent,
    IntroComponent,
    AboutComponent,
    WhyusComponent,
    PortfolioComponent,
    TestimoniosComponent,
    TeamComponent,
    ClientesComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
