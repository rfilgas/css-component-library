import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {homeConstants} from "../home/home.constants.js";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  protected readonly homeConstants = homeConstants;
}
