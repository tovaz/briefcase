import { Component, OnInit } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { BriefcasesService } from '../services/briefcases.service';
import { Router } from '@angular/router';
import { createSlug } from '../utils/slug.utils';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: false
})
export class PortfolioComponent implements OnInit {

  constructor(private briefsService: BriefcasesService, private route: Router) { }
  briefs = null;
  url = ENV.uploadUrl;
  ngOnInit(): void {
    this.briefsService.get().then( (r:any) => {
      console.log('BRIEFCASES RETURNED', r);
      if (r){
        r = r.sort( (a: any, b: any) => b.id - a.id);
        this.briefs = r;
      }
    });
  }

  openItem(item:any){
    const slug = createSlug(item.name, item.id);
    this.route.navigate(['portfolio/' + slug]);
  }

  getImageUrls(images: any[]): string[] {
    return images.map(img => this.url + '/' + img.url);
  }

}
