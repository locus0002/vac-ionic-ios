import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as Constants from '../../services/constants';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the new_championship page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-new_championship',
    templateUrl: 'new_championship.html'
})
export class NewChampionshipPage {

    txtAmount: number;
    ddlChampionship: string;
    token: string;
    groupKey: string;
    championshipList: Array<{
      id: string,
      nameChampionship: string,
      status: string,
      startDate: string,
      endDate: string
    }>;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public http:HttpClient) {

      this.championshipList = this.navParams.get("championshipList") || [];
      this.token = this.navParams.get("token") || '';
      this.groupKey = this.navParams.get("groupKey") || "";
    }

    addChampionship() {

      if (this.txtAmount && this.ddlChampionship) {

        let bodyDatta = 'token=' + this.token + '&group=' + this.groupKey + '&mount=' + this.txtAmount + '&championship=' + this.ddlChampionship,
          loadBox = this.loadingCtrl.create(
            {
              content: 'Enviando invitación...'
            }
          );

        loadBox.present();
        this.http.post<any>(
          Constants.END_POINT_SANDBOX + 'group/championship',
          bodyDatta,
          Constants.HEADERS_OPTIONS
        )
          .timeout(10000)
          .subscribe(data => {

            loadBox.dismiss();
            this.alertCtrl.create({

              title: 'Campeonato agregado con éxito',
              subTitle: 'Operación exitosa',
              buttons: ["Aceptar"]

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
          subTitle: 'Ningún campo puede ir vacío ',
          buttons: ["Aceptar"]
        }).present();
      }

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad new_championshipPage');
    }

    dismiss() {
      this.viewCtrl.dismiss();
    }

}
