// import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavBarComponent } from "../shared/components/navigation/desktop/nav-bar.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    styleUrl: './layout.component.scss',
    templateUrl: './layout.component.html',
    imports: [RouterModule, NavBarComponent]
})
export class LayoutComponent {}
