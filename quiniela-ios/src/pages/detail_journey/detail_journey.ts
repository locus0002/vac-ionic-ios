import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { DetailForecastPage } from '../detail_forecast/detail_forecast';
import * as Constants from '../../services/constants';
import { DataParser } from '../../services/dataParser';
/*
  Generated class for the detail_journey page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-detail_journey',
    templateUrl: 'detail_journey.html'
})
export class DetailJourneyPage {

    type: string;
    currentPools: Array<any> = [];
    currentJourney: {
      id: string,
      journeyName: string,
      limitDate: string,
      championshipName: string,
      groupId: string,
      groupName: string
    };
    detailJourney: Array<{
      matchNumber: string,
      teamNameA: string,
      teamNameB: string,
      imageTeamPathA: string,
      imageTeamPathB: string,
      score: string,
      forecast: string,
      points: string
    }>;
    currentUser: any;
    paramKey: string;
    parentPage: any;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public http:HttpClient,
                public dataParserCtrl: DataParser) {

      this.currentUser = this.navParams.get("currentUser") || null;
      this.currentJourney = this.navParams.get("currentJourney") || null;
      this.type = this.navParams.get("type");
      this.paramKey = encodeURIComponent(this.dataParserCtrl.buildSaltKey(this.currentJourney.limitDate, parseInt(this.currentJourney.id), parseInt(this.currentJourney.groupId)));
      this.getDetailJouney();
      this.parentPage = this.navParams.get("parentPage");
    }

    getDetailJouney() {

      let bodyDatta = 'token=' + this.currentUser.token + "&key=" + this.paramKey,
          loadingElement = this.loadingCtrl.create({
            content: 'Cargando...',
          });

      loadingElement.present();

      this.http.get<any>(
        Constants.END_POINT_SANDBOX + (this.type == 'Q' ? 'pool/match?' : 'pool/match/historial?') + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          this.detailJourney = this.dataParserCtrl.parserDetailJourney(data);
          loadingElement.dismiss();

        }, error => {

          loadingElement.dismiss();
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
        console.log('ionViewDidLoad detail_journeyPage');
    }

    sendQuiniela() {

      if (this.currentPools.length == this.detailJourney.length) {

        let bodyDatta = 'token=' + this.currentUser.token + '&key=' + this.paramKey + '&pools=' + JSON.stringify(this.currentPools),
          loadBox = this.loadingCtrl.create(
            {
              content: 'Enviando quiniela....'
            }
          );

        loadBox.present();
        this.http.post<any>(
          Constants.END_POINT_SANDBOX + 'pool',
          bodyDatta,
          Constants.HEADERS_OPTIONS
        )
          .timeout(10000)
          .subscribe(data => {

            loadBox.dismiss();
            this.alertCtrl.create(
              {
                title: 'Quiniela enviada',
                message: 'La operación se realizó de manera exitosa. ',
                buttons: ['Aceptar']
              }
            ).present();
            this.parentPage.getJourneys("journey");
            this.parentPage.getJourneys("historical");
            this.navCtrl.pop();

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
          subTitle: 'La quínela no se puede enviar a menos de que todos los pronósticos de los encuentros se hallan llenado.',
          buttons: ["Aceptar"]
        }).present();
      }

    }

    updateForecast(index:number) {

      console.log("Pools");
      console.log(JSON.stringify( this.currentPools));

      let bodyDatta = 'token=' + this.currentUser.token + "&key=" + this.paramKey + "&result=" + this.detailJourney[index].matchNumber,
          loadingElement = this.loadingCtrl.create({
            content: 'Cargando...',
          });

      loadingElement.present();

      this.http.get<any>(
        Constants.END_POINT_SANDBOX + 'pool/match/teams?' + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          let currentMatchData = this.dataParserCtrl.parserMatchData(data);
          loadingElement.dismiss();
          let currentModal = this.modalCtrl.create
            (DetailForecastPage,
            {
              currentPools: this.currentPools,
              matchData: currentMatchData,
              parentPage: this,
              indexDetailMatch: index
            });
          currentModal.present();

        }, error => {

          loadingElement.dismiss();
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

    updateForecastData(index: number, matchData:any) {

      this.detailJourney[index].forecast = matchData.team.val + " - " + matchData.team2.val;
    }
}
