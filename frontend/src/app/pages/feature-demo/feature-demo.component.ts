import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavBarComponent } from "../../shared/components/navigation/desktop/nav-bar.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Safehtml } from "../../shared/sanitization/safe-html-pipe/safehtml.pipe"
import "@material/web/button/elevated-button";
import '@material/web/button/filled-button';
import '@material/web/button/outlined-button';
import '@material/web/checkbox/checkbox';

@Component({
    selector: 'app-feature-demo',
    standalone: true,
    templateUrl: './feature-demo.component.html',
    styleUrl: './feature-demo.component.scss',
    imports: [
        NavBarComponent,
        ReactiveFormsModule,
        Safehtml
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureDemoComponent {
  name = new FormControl('');

}
