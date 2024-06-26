import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {homeConstants} from "./home.constants.js";
import {NavBarComponent, NavBarTabComponent} from "@/app/shared/components/navigation/index.js";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    NavBarTabComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly homeConstants = homeConstants;
}
