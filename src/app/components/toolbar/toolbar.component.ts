import { OverlayContainer } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    standalone: false
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  @Input() sidebar:any;
  @HostBinding('class') componentClass: any;

  constructor(private themeService: ThemeService, private overContainer: OverlayContainer, private cdr: ChangeDetectorRef) { }
  currentTheme:any = null;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.currentTheme = this.themeService.currentTheme;
  }

  changeTheme(){
    if (this.currentTheme == 'dark')
      this.themeService.setTheme('light');
    else
      this.themeService.setTheme('dark');
    this.currentTheme = this.themeService.currentTheme;
    this.cdr.detectChanges();
  }



}
