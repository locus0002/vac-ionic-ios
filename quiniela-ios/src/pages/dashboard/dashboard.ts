import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, PopoverController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GroupsPage } from '../groups/groups';
import { PositionTablePage } from '../position_table/position_table';
import { ScorePage } from '../score/score';
import { QuinielaPage } from '../quinielas/quinielas';
import { menuPopover } from '../pop_menu/pop_menu';
import { LoginPage } from '../login/login';
import * as Constants from '../../services/constants';
import { timeout } from 'rxjs/operators';
/*
  Generated class for the dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html'
})
export class DashboardPage {
    currentUser: { token: string, name: string, flagFB: boolean, balance:number };

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public http: HttpClient,
                public popoverCtrl:PopoverController,
                public loadingCtrl:LoadingController) {

      this.currentUser = this.navParams.get("currentUser") || null;
      this.getBalance(false);
    }

    getCredit() {

      if (this.currentUser) {

        this.alertCtrl.create({
          title: 'Actualizar',
          subTitle: 'Se actualizarán sus datos',
          buttons: [{
            text: 'Aceptar',
            handler: () => { this.getBalance(true); }
          }]
        }).present();

        let bodyDatta = 'token=' + this.currentUser.token;
        window.open(Constants.END_POINT_SANDBOX + 'payu-money?' + bodyDatta, '_system');

      } else {

        this.alertCtrl.create(
          {
            title: 'Ha ocurrido un problema al obtener tus datos',
            subTitle: 'Cierra sesión y vuelve a ingresar',
            buttons: ["Aceptar"]
          }
        ).present();
      }
    }

    getBalance(showLoader: boolean) {

      let bodyDatta = 'token=' + this.currentUser.token,
          loadBox = null;

      if (showLoader) {
        loadBox = this.loadingCtrl.create(
          {
            content: 'Actualizando...'
          }
        );
        loadBox.present();
      }

      console.log("TokenFB", this.currentUser.token);
      this.http.get<any>(
        Constants.END_POINT_SANDBOX + 'credits/balance?' + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          if (showLoader) { loadBox.dismiss(); }
          console.log("data", data);
          this.currentUser.balance = parseFloat(data.current);

        }, error => {

          console.log("ERROR_GET_BALANCE", error);
          console.log("ERROR_GET_BALANCE", JSON.stringify( error));
          if (showLoader) { loadBox.dismiss(); }
          let errorMesage = "",
              errorTitle = "";

          if(error instanceof HttpErrorResponse){

            errorMesage = error.error;
            errorTitle = "Error";
          }else{

            errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
            errorTitle = "Servicio no disponible";
          }

          this.alertCtrl.create(
            {
              title: errorTitle,
              message: errorMesage,
              buttons:['Aceptar']
            }
          ).present();
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad dashboardPage');
    }

    play() {

      if (this.currentUser) {

        this.navCtrl.push(QuinielaPage, { currentUser: this.currentUser });

      } else {

        this.alertCtrl.create(
          {
            title: 'Ha ocurrido un problema al obtener tus datos',
            subTitle: 'Cierra sesión y vuelve a ingresar',
            buttons: ["Aceptar"]
          }
        ).present();
      }
    }

    showMenu(myEvent) {

      let popMenu = this.popoverCtrl.create(menuPopover, { token: this.currentUser.token, flagFB: this.currentUser.flagFB });
      popMenu.present({ ev: myEvent });
      popMenu.onDidDismiss(data => {
        if (data) {
          this.navCtrl.setRoot(LoginPage);
        }
      });
    }

    viewGroups() {

      if (this.currentUser) {

        this.navCtrl.push(GroupsPage, { currentUser: this.currentUser });

      } else {

        this.alertCtrl.create(
          {
            title: 'Ha ocurrido un problema al obtener tus datos',
            subTitle: 'Cierra sesión y vuelve a ingresar',
            buttons:["Aceptar"]
          }
        ).present();
      }
      
    }

    viewPositionTable() {

      if (this.currentUser) {

        console.log("VIEW_SCORE", this.currentUser);
        console.log("VIEW_SCORE", JSON.stringify( this.currentUser));
        this.navCtrl.push(PositionTablePage, { currentUser: this.currentUser });

      } else {

        this.alertCtrl.create(
          {
            title: 'Ha ocurrido un problema al obtener tus datos',
            subTitle: 'Cierra sesión y vuelve a ingresar',
            buttons: ["Aceptar"]
          }
        ).present();
      }
    }

    viewScore() {

      if (this.currentUser) {

        console.log("VIEW_SCORE", this.currentUser);
        console.log("VIEW_SCORE", JSON.stringify( this.currentUser));
        this.navCtrl.push(ScorePage, { currentUser: this.currentUser });

      } else {

        this.alertCtrl.create(
          {
            title: 'Ha ocurrido un problema al obtener tus datos',
            subTitle: 'Cierra sesión y vuelve a ingresar',
            buttons: ["Aceptar"]
          }
        ).present();
      }
    }

}
