import {Component, OnInit} from '@angular/core';
import liff from '@line/liff';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-line-page',
  templateUrl: './line-page.component.html',
  styleUrls: ['./line-page.component.css']
})
export class LinePageComponent implements OnInit {
  idToken: string | null = '';
  displayName: string | null = '';
  pictureUrl: string | undefined = '';
  statusMessage: string | undefined = '';
  userId = '';

  ngOnInit(): void {
    this.initLine();
  }

  constructor(private _route: Router) {

  }


  initLine(): void {
    liff.init({ liffId: '1657446172-jyvLlv6V' }, () => {
      if (liff.isLoggedIn()) {
        this.runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }

  runApp(): void {
    this.idToken = liff.getIDToken();
    liff.getProfile().then(profile => {
      console.log(profile);
      this.displayName = profile.displayName;
      this.pictureUrl = profile.pictureUrl;
      this.statusMessage = profile.statusMessage;
      this.userId = profile.userId;
    }).catch(err => console.error(err));
  }

  logout(): void {
    this._route.navigate(["/login]"]);
    liff.logout();
    window.location.reload();
  }
}
