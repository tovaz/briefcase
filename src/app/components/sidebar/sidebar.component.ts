import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }
  activeUrl = '';
  ngOnInit(): void {
    this.router.events.subscribe( (ev:any) => {
      
      if (ev.url){
        console.log('URL ' + ev.url);
        this.activeUrl = ev.url; 
      } 
        
    });
  }

}
