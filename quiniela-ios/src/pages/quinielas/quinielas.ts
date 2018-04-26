import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, ActionSheetController, Platform, AlertController, LoadingController  } from 'ionic-angular';
import { DetailJourneyPage } from '../detail_journey/detail_journey';
import * as Constants from '../../services/constants';
import { DataParser } from '../../services/dataParser';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the quinielas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-quinielas',
    templateUrl: 'quinielas.html'
})
export class QuinielaPage {

    journeyList: Array<{
      id: string,
      journeyName: string,
      limitDate: string,
      championshipName: string,
      groupId: string,
      groupName: string
    }>;

    historicalList: Array<{
      id: string,
      journeyName: string,
      limitDate: string,
      championshipName: string,
      groupId: string,
      groupName: string
    }>;
    currentUser: any;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                public platform: Platform,
                public http:HttpClient,
                public alertCtrl: AlertController,
                public loadingCtrl:LoadingController,
                public dataParserCtrl:DataParser) {

      this.currentUser = this.navParams.get("currentUser") || null;
      this.getJourneys("journey");
      this.getJourneys("historical");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad quinielasPage');
    }

    getJourneys(type:string) {

      let bodyDatta = 'token=' + this.currentUser.token,
        loadingElement = this.loadingCtrl.create({
          content: 'Cargando...',
        });

      loadingElement.present();

      this.http.get<any>(
        Constants.END_POINT_SANDBOX + (type == 'journey' ? 'pool/matches?' : 'pool/matches/historial?') + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          if (type == 'journey') {
            this.journeyList = this.dataParserCtrl.parserJourneyData(data);
          } else {
            this.historicalList = this.dataParserCtrl.parserJourneyData(data);
          }
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

    showMenuDetailJourney(index:number, type:string) {

      let buttons = [
        {
          text: 'Detalle de la jornada',
          icon: !this.platform.is('ios') ? 'information-circle' : null,
          handler: () => { this.viewDetailJourney(index, type); }
        },
        {
          text: 'Hacer quiniela',
          icon: !this.platform.is('ios') ? 'list-box' : null,
          handler: () => { this.viewDetailJourney(index, type); }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null
        }
      ];

      type == 'H' ? buttons.splice(1, 1) : buttons.splice(0, 1);

      this.actionSheetCtrl.create(
        {
          title: 'Opciones',
          buttons: buttons
        }
      ).present();
    }

    viewDetailJourney(index:number, type: string) {

      this.navCtrl.push(DetailJourneyPage, { parentPage:this, currentUser: this.currentUser, currentJourney: (type == 'Q' ? this.journeyList[index] : this.historicalList[index]), type: type });
    }

}
