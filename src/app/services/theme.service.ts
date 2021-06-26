import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { StyleManager } from "./style-manager.service";

@Injectable()
export class ThemeService {
  themeChanged = new Subject<string>();
  currentTheme = localStorage.getItem('theme');

  constructor( private styleManager: StyleManager) {
  }

  setTheme(themeName:any) {
    this.currentTheme = themeName;
    this.themeChanged.next(themeName);
    localStorage.setItem('theme', themeName);
  }

  
}