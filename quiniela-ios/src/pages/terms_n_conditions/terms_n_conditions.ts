import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the terms_n_conditions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-terms_n_conditions',
    templateUrl: 'terms_n_conditions.html'
})
export class TermsNConditionsPage {

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl:ViewController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad terms_n_conditionsPage');
    }

    dismiss() {

      this.viewCtrl.dismiss();
    }

}
