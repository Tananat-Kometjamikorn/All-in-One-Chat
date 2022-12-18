import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { delay, filter } from 'rxjs/operators';
import {BreakpointObserver} from "@angular/cdk/layout";
import { NavigationEnd, Router } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
  }

  constructor() {}


}
