import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../services/technologies.service';
import { environment as ENV } from 'src/environments/environment';
import { BriefcasesService } from '../services/briefcases.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  techs = null;
  briefs = null;
  url = ENV.uploadUrl;
  constructor(private techService: TechnologiesService, private briefsService: BriefcasesService) { }

  ngOnInit() {
    this.techService.get().then( (r:any) => {
      console.log('TECH RETURNED', r);
      if (r)
        this.techs = r;
    });

    this.briefsService.get().then( (r:any) => {
      console.log('BRIEFCASES RETURNED', r);
      if (r)
        this.briefs = r;
    });
  }

  clickBrief(item:any){
    console.log('CLICKED CAROUSEL', item)
  }

}
