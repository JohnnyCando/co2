import { Component } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AngularMaterialModule, SideNavComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public selectedTab: number = 1;

  onTabSelected(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
