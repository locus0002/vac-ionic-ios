import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { ConfirmationModal } from '../confirmation/confirmation';
import { TermsNConditionsPage } from '../terms_n_conditions/terms_n_conditions';
import * as Constants from '../../services/constants';
import { timeout } from 'rxjs/operators';
/*
  Generated class for the register_data page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-register_data',
    templateUrl: 'register_data.html'
})
export class RegisterDataPage {

    txtName: string;
    txtLastName: string;
    txtEmail: string;
    txtEmailConfirmation: string;
    txtPassword: string;
    txtPasswordConfirmation: string;
    ddlBirthDate: any;
    ddlGenre: any;
    chbAccept: any;
    

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                public http: HttpClient,
                public modalCtrl:ModalController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad register_dataPage');
    }

    saveContinue() {

      if (this.validateMandatoryData()) {
        if (this.validateBirthDate() && this.validateConfirmationData('password') && this.validateConfirmationData('email')) {

          let bodyDatta = 'InputName=' + this.txtName
                        + '&InputLastName=' + this.txtLastName
                        + '&Inputmail=' + this.txtEmail
                        + '&InputUser='  + this.txtEmail
                        + '&InputPass1=' + this.txtPassword
                        + '&inlineRadioOptions=' + this.ddlGenre
                        + '&InputEmail1=' + this.txtEmail,
              loadBox = this.loadingCtrl.create(
                {
                  content: 'Conectando...'
                }
              );

          loadBox.present();
          this.http.post<any>(
            Constants.END_POINT_SANDBOX + 'register-native',
            bodyDatta,
            Constants.HEADERS_OPTIONS
          )
            .timeout(10000)
            .subscribe(data => {

              console.log(data);
              loadBox.dismiss();
              this.alertCtrl.create({
                title: 'Estas a un paso',
                message: 'Te hemos enviado un código de validación a tu email',
                buttons: ['Aceptar']
              }).present();
              this.navCtrl.setRoot(ConfirmationModal, { type: 'Page', email: this.txtEmail });

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
        }
      }
    }

    showTermsNConditions() {

      this.modalCtrl.create(TermsNConditionsPage).present();
    }

    validateMandatoryData() {

      if (!(this.txtName
        && this.txtLastName
        && this.txtEmail
        && this.txtEmailConfirmation
        && this.txtPassword
        && this.txtPasswordConfirmation
        && this.ddlBirthDate
        && this.chbAccept
        && this.ddlGenre)) {

        this.alertCtrl.create(
          {
            title: "Validar",
            subTitle: "Ningún campo puede estar vacío",
            buttons: ["Aceptar"]
          }
        ).present();
        return false;
      }
      return true;
    }

    validateConfirmationData(type:string) {

      switch (type) {
        case "password":
          if (this.txtPassword != this.txtPasswordConfirmation) {

            this.alertCtrl.create(
              {
                title: "Validar",
                subTitle: "Las contraseñas no coinciden ",
                buttons:["Aceptar"]
              }
            ).present();
            return false;
          }
          break;
        case "email":
          if (this.txtPassword != this.txtPasswordConfirmation) {

            this.alertCtrl.create(
              {
                title: "Validar",
                subTitle: "Lo correos electrónicos no coinciden",
                buttons: ["Aceptar"]
              }
            ).present();
            return false;
          }
          break;
      }
      return true;
    }

    validateBirthDate() {

      let birthDate = new Date(this.ddlBirthDate),
          today = new Date();

      if ((today.getFullYear() - birthDate.getFullYear()) < 18) {
        this.alertCtrl.create(
          {
            title: "Validar",
            subTitle: "Debes ser mayor de edad para poder concursar",
            buttons: ["Aceptar"]
          }
        ).present();
        return false;
      }

      return true;
    }

}
