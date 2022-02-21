import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';
import { environment as ENV } from 'src/environments/environment';
import { default as hljs } from 'highlight.js';

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
  postContent:any = null;

  constructor(private activeRoute: ActivatedRoute,
    private blogService: BlogsService, private scroll: ViewportScroller, private sanitizer: DomSanitizer) {

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
      //this.post.content += '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/dark.min.css">';
      this.postContent = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
      this.Highlight();
    });
  }

  async toTop(){
    const contentContainer = document.querySelector('.mat-sidenav-content') || window;
    contentContainer.scrollTo({ top: 0, left: 0, behavior: 'smooth'} );
  }

  Highlight(){
    setTimeout(() => {
      const codes = document.querySelectorAll("code");
      console.log('CODES', codes);
      codes.forEach( code => {
        //code.classList.add('base16/railscasts');

        hljs.highlightElement(code);
      })

    }, 300);

  }

}
