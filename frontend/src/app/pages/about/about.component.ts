import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {homeConstants} from "../home/home.constants.js";
import {NavBarComponent, NavBarTabComponent} from "@/app/shared/components/navigation/index.js";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  protected readonly homeConstants = homeConstants;
}
