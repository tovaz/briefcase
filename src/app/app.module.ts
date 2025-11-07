import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AuthInterceptor } from './services/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { GalleryModule } from  'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { ThemeService } from './services/theme.service';
import { StyleManager } from './services/style-manager.service';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    SidebarComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    ContactComponent,
    FooterComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    AngularSvgIconModule.forRoot(),
    GalleryModule.withConfig({
      dots: true, imageSize: 'contain', autoPlay: true, gestures: true,
    }),
    // MatCarouselModule.forRoot(),
    // AnimateOnScrollModule.forRoot()
  ],
  providers: [ ThemeService, StyleManager,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
