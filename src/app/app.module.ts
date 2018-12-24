import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { BusinessComponent } from './business/business.component';
import { SkillsComponent } from './skills/skills.component';
import { PricingComponent } from './pricing/pricing.component';
import { MailUsComponent } from './mail-us/mail-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ProgressComponent } from './progress/progress.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { OwlModule } from 'ngx-owl-carousel';




export const routes: Routes = [
 {
    path: 'home',
    component: LayoutComponent
  },  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FeaturesComponent,
    BusinessComponent,
    SkillsComponent,
    PricingComponent,
    MailUsComponent,
    ProgressComponent

  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    OwlModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
