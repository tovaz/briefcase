import { Component, OnInit } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { BriefcasesService } from '../services/briefcases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
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
    this.route.navigate(['portfolio/'+item.id]);
  }

}
