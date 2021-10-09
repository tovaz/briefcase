import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lastPosts:any = null;
  constructor(private blogService: BlogsService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.get().then( (r:any) => {
      this.lastPosts = r.slice(-5);
    })
  }

  navigate(url:string){
    this.router.navigate([url]);
  }

}
