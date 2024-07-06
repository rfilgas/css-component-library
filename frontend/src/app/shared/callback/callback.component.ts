import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileNavBarComponent, NavBarComponent} from "../../shared/components/navigation/index.js";

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [CommonModule, MobileNavBarComponent, NavBarComponent],
  templateUrl: './callback.component.html'
})
export class CallbackComponent {}
