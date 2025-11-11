import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../services/technologies.service';
import { environment as ENV } from 'src/environments/environment';
import { BriefcasesService } from '../services/briefcases.service';
import { FormBuilder } from '@angular/forms';
import { createContactForm } from '../contact/contact.form';
import { Router } from '@angular/router';
import { createSlug } from '../utils/slug.utils';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit, AfterViewInit {

  techs = null;
  briefs = null;
  url = ENV.uploadUrl;

  constructor(private techService: TechnologiesService, private briefsService: BriefcasesService,
    private route: Router, private cdr: ChangeDetectorRef
   ) { }

  ngOnInit() {}

  ngAfterViewInit() {

    this.techService.get().then( (r:any) => {
      console.log('TECH RETURNED', r);
      if (r)
        this.techs = r;
      this.cdr.markForCheck();
    });

    this.briefsService.get().then( (r:any) => {
      console.log('BRIEFCASES RETURNED', r);
      if (r){
        r = r.sort( (a: any, b: any) => b.id - a.id);
        this.briefs = r;
        this.cdr.markForCheck();
      }
    });
  }

  clickBrief(item:any){
    console.log('CLICKED CAROUSEL', item)
  }

  getImageUrls(images: any[]): string[] {
    if (!images || images.length === 0) {
      return [];
    }
    return images.map(img => this.url + '/' + img.url);
  }

  openItem(item:any){
    const slug = createSlug(item.name, item.id);
    this.route.navigate(['portfolio/' + slug]);
  }
}
