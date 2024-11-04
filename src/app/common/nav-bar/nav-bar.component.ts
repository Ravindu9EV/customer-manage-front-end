import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from '../../page/add-customer/add-customer.component';
import { ManageCustomerComponent } from '../../page/manage-customer/manage-customer.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
