import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterDataPage } from '../register_data/register_data';
import { ConfirmationModal } from '../confirmation/confirmation';
import * as Constants from '../../services/constants';
import 'rxjs/add/operator/timeout';
/*
  Generated class for the login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    txtEmail: string;
    txtPassword: string;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                //public storage: Storage,
                public http: HttpClient,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                private fb: Facebook) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad loginPage');
    }

    logIn() {

      if (this.txtEmail && this.txtPassword) {

        let bodyDatta = 'InputPass1=' + this.txtPassword + '&InputEmail1=' + this.txtEmail,
            loadBox = this.loadingCtrl.create(
              {
                content: 'Conectando...'
              }
          );

        loadBox.present();
        this.http.post<any>(
          Constants.END_POINT_SANDBOX + 'login-native',
          bodyDatta,
          Constants.HEADERS_OPTIONS
        )
          .timeout(10000)
          .subscribe(data => {
            loadBox.dismiss();
            console.log("Log In without FB successful");
            console.log("TOKEN##############");
            console.log(data.token);
            this.navCtrl.setRoot(DashboardPage, { currentUser: { token: data.token, name: data.name, flagFB: false, balance:0 } });
            
          },errorLOG => {

            loadBox.dismiss();
            let errorMesage = "",
                errorTitle = "";

            if(errorLOG instanceof HttpErrorResponse){

              errorMesage = errorLOG.error;
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

        this.alertCtrl.create(
          {
            title: 'Validar',
            message: 'El usuario y/o contraseña no pueden estar vacíos',
            buttons:['Aceptar']
          }
        ).present();
      }
      
    }

    createAccount() {
      this.navCtrl.push(RegisterDataPage);
      console.log("test");
    }

    loginFacebook() {

      console.log("test");
      let permission = new Array<string>();

      permission = ["public_profile"];
      this.fb.login(permission)
        .then((responseFB) => {

          let userId = responseFB.authResponse.userID,
              params = new Array<string>();

          this.fb.api("/me?fields=gender,email,first_name,last_name", params)
            .then((userFB) => {
              userFB.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";

              let bodyDatta = 'name=' + userFB.first_name + '&mail=' + userFB.email + '&last_name=' + userFB.last_name + '&id=' + userFB.id + '&gender=' + Constants.GENDER[userFB.gender],
                  loadBox = this.loadingCtrl.create(
                    {
                      content: 'Conectando...'
                    }
                  );

              loadBox.present();
              this.http.post<any>(
                Constants.END_POINT_SANDBOX + 'login-fb-native',
                bodyDatta,
                Constants.HEADERS_OPTIONS
              )
                .timeout(10000)
                .subscribe(data => {

                  let response = data;
                  loadBox.dismiss();
                  this.navCtrl.setRoot(DashboardPage, { currentUser: { token: response.token, name: response.name, flagFB:true, balance:0 } });

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
              
                /*this.storage.set('userAFM',
                {
                  name: userFB.name,
                  gender: userFB.gender,
                  picture: userFB.picture
                }).then(() => {
                  this.navCtrl.setRoot(DashboardPage);
                }, (error) => {
                  console.log("Error in login Facebook: " + error);
                });*/
            });
        }, (error) => {
          console.log("Error in login permission: " + JSON.stringify(error));
        });
    }

    recoveryPassword() {
      this.modalCtrl.create(ConfirmationModal, { type:'Modal' }).present();
      console.log("test");
    }

}
