import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
import { environment as ENV } from 'src/environments/environment';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

declare let gtag: Function;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit, AfterViewInit {
  @HostBinding('class') componentClass: any;
  title = 'briefcase';

  constructor(private themeService: ThemeService, private overContainer: OverlayContainer,
              private activeRoute: ActivatedRoute, private router:Router, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(){
    this.isDebug();

  }

  ngAfterViewInit(){
    this.themeService.themeChanged.subscribe( t => {
      this.changeTheme(t);
    });

    this.activeRoute.paramMap.subscribe((params: ParamMap) => {

    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }

      gtag('config', 'G-W7EC7Y6LVC',
      {
        'page_path': evt.urlAfterRedirects
      } );
      this.toTop();
    });

    setTimeout(() => {
      const currentTheme = this.themeService.currentTheme;
      if (currentTheme)
        this.changeTheme(currentTheme);
      else
        this.themeService.setTheme('dark');
    }, 50);
  }

  changeTheme(theme:any){
    this.overContainer.getContainerElement().classList.add(theme);
    this.componentClass = theme;
  }

  isDebug(){
    let DEBUG = ENV.debug;
    console.log = DEBUG ? console.log : () => { };
  }

  onActivate(event:any, outlet:any=null){
    //outlet.scrollTop = 0;
  }

  async toTop(){
    const contentContainer = document.querySelector('.mat-sidenav-content') || window;
    contentContainer.scrollTo({ top: 0, left: 0} );
  }

}
