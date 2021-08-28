import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
import { environment as ENV } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @HostBinding('class') componentClass: any;
  title = 'briefcase';

  constructor(private themeService: ThemeService, private overContainer: OverlayContainer){

  }

  ngOnInit(){
    this.isDebug();
    this.themeService.themeChanged.subscribe( t => {
      this.changeTheme(t);
    })
  }

  ngAfterViewInit(){
    const currentTheme = this.themeService.currentTheme;
    if (currentTheme)
      this.changeTheme(currentTheme);
    else
      this.themeService.setTheme('light');
  }

  changeTheme(theme:any){
    this.overContainer.getContainerElement().classList.add(theme);
    this.componentClass = theme;
  }

  isDebug(){
    let DEBUG = ENV.debug;
    console.log = DEBUG ? console.log : () => { };
  }
}
