import { Component } from '@angular/core';
import  { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;
  
  constructor() {
    GoogleAuth.initialize()
  }


  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log('my user: ', this.user);
  }

  async refresh() {
    const googleUser = await GoogleAuth.refresh();
    console.log('my user: ', googleUser);
  }

  async signOut() {
    await GoogleAuth.signOut();
    this.user = null;
  }
}
