import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { SkillComponent } from './skill/skill.component';
import { FaqComponent } from './faq/faq.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TeamComponent } from './team/team.component';
import { ReviewComponent } from './review/review.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PriceComponent } from './price/price.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    AboutComponent,
    ServiceComponent,
    SkillComponent,
    FaqComponent,
    SubscribeComponent,
    TeamComponent,
    ReviewComponent,
    PortfolioComponent,
    PriceComponent,
    TestimonialComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
