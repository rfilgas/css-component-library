import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {homeConstants} from "../home/home.constants.js";
import {NavBarButtonsComponent, NavBarComponent, NavBarTabComponent} from "@/app/shared/components/navigation/index.js";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavBarTabComponent, NavBarComponent, NavBarButtonsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  protected readonly homeConstants = homeConstants;
}
