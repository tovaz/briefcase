import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BriefcasesService } from '../services/briefcases.service';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit, AfterViewInit {
  portfolioId = null;
  portfolio:any;
  screen = { width: 765, height: 1000};
  images: GalleryItem[] = [];
  url = environment.uploadUrl;
  thrumbalPosition:'top' | 'left' | 'right' | 'bottom' = 'top';

  constructor(private actRoute: ActivatedRoute, private briefService: BriefcasesService) { 
    this.portfolioId = this.actRoute.snapshot.params.id;
  }

  async ngOnInit() {
    await this.briefService.getOne(this.portfolioId).then( r => {
      this.portfolio = r;
    });

    if (this.portfolio){
      this.portfolio.images.forEach( (img:any) => {
        this.images.push(new ImageItem({ src: this.url + img.url, thumb: this.url + img.formats.thumbnail.url }));
      })
      
    }
  }

  ngAfterViewInit(){
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screen.width = window.innerWidth;
    this.screen.height = window.innerHeight;
    if (this.screen.width > 600) 
      this.thrumbalPosition = 'left';
    else
      this.thrumbalPosition = 'bottom';
  }
}
