import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import * as Constants from '../../services/constants';
import { timeout } from 'rxjs/operators';

/*
  Generated class for the confirmation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-confirmation',
    templateUrl: 'confirmation.html'
})
export class ConfirmationModal {

    type: string;
    currentEmail: string;
    txtConfirmationCode: string;
    txtEmail: string;
    txtOldPassword: string;
    txtNewPassword: string;
    txtConfirmationPassword: string;
    token: string;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                public http: HttpClient) {

      this.type = this.navParams.get("type") || "";
      this.currentEmail = this.navParams.get("email") || "";
      this.token = this.navParams.get("token") || "";
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad confirmationPage');
    }

    dismiss() {
      this.viewCtrl.dismiss();
    }

    recoveryPassword() {

      if (this.txtEmail) {

        let bodyDatta = 'mail=' + this.currentEmail,
          loadBox = this.loadingCtrl.create(
            {
              content: 'Conectando...'
            }
          );

        loadBox.present();
        this.http.post<any>(
          Constants.END_POINT_SANDBOX + 'recover-native',
          bodyDatta,
          Constants.HEADERS_OPTIONS
        )
          .timeout(10000)
          .subscribe(data => {

            console.log(data);
            loadBox.dismiss();
            this.alertCtrl.create({
              title: 'Éxito',
              message: 'Hemos enviado una contraseña temporal a su correo electrónico para que pueda ingresar al sistema.',
              buttons: ['Aceptar']
            }).present();
            this.navCtrl.setRoot(LoginPage);

          }, error => {

            loadBox.dismiss();

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
          }
          );

      } else {

        this.alertCtrl.create({
          title: 'Validar',
          subTitle: 'El email no puede estar vacío',
          buttons: ["Aceptar"]
        }).present();
      }
      this.viewCtrl.dismiss();
    }

    saveContinue() {

      if (this.txtConfirmationCode && this.currentEmail) {

        let bodyDatta = 'mail=' + this.currentEmail
          + '&code=' + this.txtConfirmationCode,
          loadBox = this.loadingCtrl.create(
            {
              content: 'Conectando...'
            }
          );

        loadBox.present();
        this.http.post<any>(
          Constants.END_POINT_SANDBOX + 'validate-native',
          bodyDatta,
          Constants.HEADERS_OPTIONS
        )
          .timeout(10000)
          .subscribe(data => {

            console.log(data);
            loadBox.dismiss();
            this.alertCtrl.create({
              title: 'Éxito',
              message: 'El código de confirmación fue recibido con éxito',
              buttons: ['Aceptar']
            }).present();
            this.navCtrl.setRoot(LoginPage);

          }, error => {

            loadBox.dismiss();
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
          }
          );
        
      } else {

        this.alertCtrl.create({
          title: 'Validar',
          subTitle: 'El código de confirmación no puede estar vacío',
          buttons: ["Aceptar"]
        }).present();
      }
    }

    modifyPassword() {

      if (this.txtNewPassword
          && this.txtConfirmationPassword
          && this.txtOldPassword
          && this.txtEmail){

        if (this.txtNewPassword == this.txtConfirmationPassword) {

          let bodyDatta = 'token=' + this.token
                        + '&pwd=' + this.txtOldPassword
                        + '&mail=' + this.txtEmail
                        + '&newPwd=' + this.txtNewPassword,
              loadBox = this.loadingCtrl.create(
                {
                  content: 'Conectando...'
                }
              );

          console.log("token", this.token);
          loadBox.present();
          this.http.post<any>(
            Constants.END_POINT_SANDBOX + 'update-pwd',
            bodyDatta,
            Constants.HEADERS_OPTIONS
          )
            .timeout(10000)
            .subscribe(data => {

              console.log(data);
              loadBox.dismiss();
              this.alertCtrl.create({
                title: 'Éxito',
                message: 'La contraseña ha sido cambiada de manera exitosa.',
                buttons: ['Aceptar']
              }).present();
              this.viewCtrl.dismiss();

            }, error => {

              loadBox.dismiss();
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
          
        } else {

          this.alertCtrl.create({
            title: 'Validar',
            subTitle: 'Las contraseñas deben de coincidir.',
            buttons: ["Aceptar"]
          }).present();
        }
      }else{

        this.alertCtrl.create({
          title: 'Validar',
          subTitle: 'Ningún campo puede ir vacío.',
          buttons:["Aceptar"]
        }).present();
      }
    }
}
