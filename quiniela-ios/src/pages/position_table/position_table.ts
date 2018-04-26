import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as Constants from '../../services/constants';
import { DataParser } from '../../services/dataParser';
import { timeout } from 'rxjs/operators/timeout';

/*
  Generated class for the position_table page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-position_table',
    templateUrl: 'position_table.html'
})
export class PositionTablePage {

    positionList: Array<Object>;
    championshipList: Array<{
      id: string,
      nameChampionship: string,
      status: string,
      startDate: string,
      endDate: string
    }> = [];
    currentTeams: Array<{
      id: string,
      teamName: string,
      points: string,
      difference: string,
      imagePath: string
    }> = [];
    currentUser: any;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public http:HttpClient,
                public dataParserCtrl: DataParser) {

      this.currentUser = this.navParams.get("currentUser") || null;
      this.getChampionships();
    }

    getPositions(championshipId:number) {

      let bodyDatta = 'token=' + this.currentUser.token + '&championship=' + championshipId,
          loadingElement = this.loadingCtrl.create({
            content: 'Cargando campeonato...',
          });

      loadingElement.present();

      this.http.get<any>(
        Constants.END_POINT_SANDBOX + 'standing-scores/championship?' + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          this.currentTeams = this.dataParserCtrl.parserPositionTableData(data);
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

    getChampionships() {

      let bodyDatta = 'token=' + this.currentUser.token;

      this.http.get<any>(
        Constants.END_POINT_SANDBOX + 'championships?' + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          this.championshipList = this.dataParserCtrl.parserChampionshipData(data);

        }, error => {

          console.log("ERROR_GET_CHAMPIONSHIP", error);
          console.log("ERROR_GET_CHAMPIONSHIP", JSON.stringify( error));
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
        console.log('ionViewDidLoad position_tablePage');
    }

    selectChampionship() {

      let championshipPrompt = this.alertCtrl.create(
        {
          title: 'Campeonatos',
          subTitle: 'Seleccione el campeonato que desea visualizar ',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => { console.log("Operation Cancelada"); }
            },
            {
              text: 'Seleccionar',
              handler: (data) => {
                this.getPositions(data);
              }
            }
          ]
        }
      );

      this.championshipList.forEach(
        function (currentChamp) {
          championshipPrompt.addInput({
            type: 'radio',
            label: currentChamp.nameChampionship,
            value: currentChamp.id.toString()
          });
        }
      );

      championshipPrompt.present();
    }

}
