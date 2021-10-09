import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';
import { environment as ENV } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  url = ENV.uploadUrl;
  post:any = null;

  color1 = 155 + (Math.random() * 100);
  color2 = 155 + (Math.random() * 100);

  constructor(private activeRoute: ActivatedRoute,
    private blogService: BlogsService, private scroll: ViewportScroller) {

  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.loadPost(id);
      //this.toTop();
    });
  }

  loadPost(id:any){
    this.blogService.getOne(id).then(r => {
      this.post = r;
    });
  }

  async toTop(){
    const contentContainer = document.querySelector('.mat-sidenav-content') || window;
    contentContainer.scrollTo({ top: 0, left: 0, behavior: 'smooth'} );
  }

}
