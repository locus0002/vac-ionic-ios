import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as Constants from '../../services/constants';
import { DataParser } from '../../services/dataParser';
import { timeout } from 'rxjs/operators';
/*
  Generated class for the score page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-score',
    templateUrl: 'score.html'
})
export class ScorePage {

    scoreList: Array<{
      groupName: string,
      championshipName: string,
      pointsAccumulated: string
    }>;
    currentUser: any;
    
    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public dataParserCtrl: DataParser,
                public http:HttpClient,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController) {

      this.currentUser = this.navParams.get("currentUser") || null;
      this.getMyScore();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad scorePage');
    }

    getMyScore() {

      let bodyDatta = 'token=' + this.currentUser.token,
        loadingElement = this.loadingCtrl.create({
          content: 'Cargando puntuación...',
        });

      loadingElement.present();

      this.http.get<any>(
        Constants.END_POINT_SANDBOX + 'participant/scores?' + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          this.scoreList = this.dataParserCtrl.parserScoreData(data);
          loadingElement.dismiss();

        }, error => {

          console.log("ERROR_GET_MYSCORE", error);
          console.log("ERROR_GET_MYSCORE", JSON.stringify( error));
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

}
