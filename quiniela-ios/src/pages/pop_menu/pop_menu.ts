import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, ModalController, AlertController, LoadingController, ViewController } from 'ionic-angular';
import { ConfirmationModal } from '../confirmation/confirmation';
import { LoginPage } from '../login/login';
import * as Constants from '../../services/constants';
import { timeout } from 'rxjs/operators';
/*
  Generated class for the pop_menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-pop_menu',
    templateUrl: 'pop_menu.html'
})
export class menuPopover {

    token: string;
    flagFB: boolean;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl:ModalController,
                public alertCtrl: AlertController,
                public loadingCtrl:LoadingController,
                public http:HttpClient,
                public viewCtrl:ViewController) {

      this.token = this.navParams.get("token");
      this.flagFB = this.navParams.get("flagFB");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad pop_menuPage');
    }

    modifyPassword() {

      if (this.flagFB) {

        this.alertCtrl.create({
          title: 'Información',
          subTitle: 'Has ingresado con Facebook, esta opción no está disponible',
          buttons:["Aceptar"]
        }).present();

      } else {
        this.viewCtrl.dismiss();
        this.modalCtrl.create(ConfirmationModal, { token: this.token, type: "Modal_MC" }).present();
      }
    }

    logout() {

      let bodyDatta = 'token=' + this.token,
          loadBox = this.loadingCtrl.create(
            {
              content: 'Conectando...'
            }
          );

      loadBox.present();
      this.http.post<any>(
        Constants.END_POINT_SANDBOX + 'logout',
        bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          console.log(data);
          loadBox.dismiss();
          this.viewCtrl.dismiss(true);
          //this.navCtrl.setRoot(LoginPage);

        }, error => {

          loadBox.dismiss();
          console.log("error", error);
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

}
