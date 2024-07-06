import { Component } from '@angular/core';
import { NavBarTabComponent } from './nav-bar-tab.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { NavBarButtonsComponent } from "./nav-bar-buttons.component";

@Component({
    standalone: true,
    selector: 'app-nav-bar-tabs',
    styleUrl: './nav-bar.component.scss',
    templateUrl: './nav-bar-tabs.component.html',
    imports: [NavBarTabComponent, MatButtonModule, RouterLink, NavBarButtonsComponent]
})
export class NavBarTabsComponent {}
