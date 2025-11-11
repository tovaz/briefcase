import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit, AfterViewInit {
  lastPosts:any = null;
  constructor(private blogService: BlogsService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.blogService.get().then( (r:any) => {
      this.lastPosts = r.slice(-5);
      this.cdr.detectChanges();
    })
  }

  navigate(url:string){
    this.router.navigate([url]);
  }

}
