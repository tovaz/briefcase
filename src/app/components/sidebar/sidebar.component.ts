import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('appSidebar', {static: true}) sidebar:any;

  constructor(public router: Router) { }
  activeUrl = '';
  @Input() sideNav:any;

  ngOnInit(): void {
    this.router.events.subscribe( (ev:any) => {
      //this.sidebar.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      if (ev.url){
        this.activeUrl = ev.url;
        this.sideNav.close();
      }

    });
  }

}
