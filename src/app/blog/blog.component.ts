import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { TechnologiesService } from '../services/technologies.service';
import { environment as ENV } from 'src/environments/environment';
import { Router } from '@angular/router';
import { createSlug } from '../utils/slug.utils';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: false
})
export class BlogComponent implements OnInit {
  categories:any = [];
  technologies:any = [];
  selectedCat = { name: 'Todas', id: -1 };
  selectedTech = { name: 'Todas', id: -1 };
  searchTerm = '';

  posts:any = null;
  url = ENV.uploadUrl;

  constructor(private blogsService: BlogsService, private techsService: TechnologiesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categories[0] = this.selectedCat;
    this.technologies[0] = this.selectedTech;
    this.blogsService.getCategories().then( r => {
      this.categories = this.categories.concat(r);
    });

    this.techsService.get().then( r => {
      this.technologies = this.technologies.concat(r);
    });

    this.blogsService.get().then( r => {
      this.posts = r;
      console.log('BLOGS ', r);
    });
  }

  filter(cat:any, tech:any){
    let category = cat ? cat.id : this.selectedCat.id;
    let technologies = tech ? tech.id: this.selectedTech.id;
    if (category == -1) category = undefined;
    if (technologies == -1) technologies = undefined;

    this.blogsService.get({ category, technologies, title_contains: this.searchTerm }).then( r => {
      this.posts = r;
    });

    this.selectedCat = cat ? cat : this.selectedCat;
    this.selectedTech = tech ? tech : this.selectedTech;
  }

  openPost(post:any){
    const slug = createSlug(post.title, post.id);
    this.router.navigate(['/blog/post', slug]);
  }

}
