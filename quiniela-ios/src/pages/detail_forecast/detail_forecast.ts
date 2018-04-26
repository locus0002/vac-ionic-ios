import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import * as Constants from '../../services/constants';
import { DataParser } from '../../services/dataParser';
/*
  Generated class for the detail_forecast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-detail_forecast',
    templateUrl: 'detail_forecast.html'
})
export class DetailForecastPage {

    currentPools: Array<any>;
    currentPool: { team: any, team2: any } = {team: {}, team2: {} };
    currentMatchData: {
      teamNameA: string,
      teamIdA: string,
      imageTeamPathA: string,
      forecastA: string;
      teamNameB: string,
      teamIdB: string,
      imageTeamPathB: string,
      forecastB:string
    };
    parentPage: any;
    indexDetailMatch: number;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public dataParserCtrl:DataParser,
                public http:HttpClient) {

      this.currentPools = this.navParams.get("currentPools");
      this.currentMatchData = this.navParams.get("matchData");
      this.parentPage = this.navParams.get("parentPage");
      this.indexDetailMatch = this.navParams.get("indexDetailMatch");
    }

    dismiss() {

      this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad detail_forecastPage');
    }

    setScore(type) {

      this.alertCtrl.create(
        {
          title: 'Pronóstico',
          message: 'Por favor ingrese su pronóstico [' + (type == 'A' ? this.currentMatchData.teamNameA : this.currentMatchData.teamNameB) + ']',
          inputs: [
            {
              name: 'txtForecast',
              placeholder: '0',
              type: 'number'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: data => { console.log("Operation canceled"); }
            },
            {
              text: 'Guardar',
              handler: data => {
                if (type == 'A') {
                  if (data.txtForecast || data.txtForecast == '0') {
                    this.currentPool.team = { "id": this.currentMatchData.teamIdA, "val": data.txtForecast };
                    this.currentMatchData.forecastA = data.txtForecast;
                  }
                } else {
                  if (data.txtForecast || data.txtForecast == '0') {
                    this.currentPool.team2 = { "id": this.currentMatchData.teamIdB, "val": data.txtForecast };
                    this.currentMatchData.forecastB = data.txtForecast;
                  }
                }
              }
            }
          ]
        }
      ).present();
    }

    updateForecast() {

      if (this.currentPool.team.id && this.currentPool.team2.id) {

        this.addMatchData();
        this.alertCtrl.create(
          {
            title: 'Pronostico actualizado',
            message: 'La operación se realizó de manera exitosa.',
            buttons: ['Aceptar']
          }
        ).present();
        let that = this;
        this.viewCtrl.onDidDismiss(function () { that.parentPage.updateForecastData(that.indexDetailMatch, that.currentPool); });
        this.viewCtrl.dismiss();
      } else {
        this.alertCtrl.create(
          {
            title: 'Validar',
            message: 'No puede estar ningún campo vacío.',
            buttons: ['Aceptar']
          }
        ).present();
      }

    }

    addMatchData() {

      let that = this;
      if (this.currentPools.length > 0) {

        let indexFound = this.currentPools.findIndex(function (currentPoolElement) {
          return that.currentPool.team.id == currentPoolElement.team.id;
        });

        if (indexFound > -1) {
          this.currentPools[indexFound].team.val = this.currentPool.team.val;
          this.currentPools[indexFound].team2.val = this.currentPool.team2.val;
        } else {

          this.currentPools.push(this.currentPool);
        }
      } else {
        this.currentPools.push(this.currentPool);
      }
    }

}
