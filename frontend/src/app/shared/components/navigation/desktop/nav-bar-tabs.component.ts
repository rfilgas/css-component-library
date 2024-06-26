import { Component } from '@angular/core';
import { NavBarTabComponent } from './nav-bar-tab.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
    imports: [NavBarTabComponent, MatButtonModule, RouterLink],
  selector: 'app-nav-bar-tabs',
  templateUrl: './nav-bar-tabs.component.html',
})
export class NavBarTabsComponent {}
