import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedCoursesComponent } from './components/featured-courses/featured-courses.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HeroComponent,
    FeaturedCoursesComponent,
    CourseCardComponent,
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
