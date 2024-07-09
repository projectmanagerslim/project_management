import { Component } from '@angular/core';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';



@Component({
  selector: 'app-adminfooter',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,],
  templateUrl: './adminfooter.component.html',
  styleUrl: './adminfooter.component.css'
})
export class AdminfooterComponent {

}
