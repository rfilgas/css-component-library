import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {homeConstants} from "../home/home.constants.js";
import {NavBarComponent, NavBarTabComponent} from "@/app/shared/components/navigation/index.js";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,NavBarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  protected readonly homeConstants = homeConstants;
}
