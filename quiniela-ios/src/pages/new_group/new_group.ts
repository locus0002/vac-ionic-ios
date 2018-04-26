import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import * as Constants from '../../services/constants';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the new_group page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-new_group',
    templateUrl: 'new_group.html'
})
export class NewGroupPage {

    emailList: Array<string> = [];
    championshipList: Array<string> = [];
    allChampionshipList: Array<{ text: string, value: number }>;
    currentGroup: any;
    txtNameGroup:string;
    chbPublic: any;
    txtTypeGroup: string;
    type:string;
    token: string;
    parentPage: any;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public http: HttpClient) {

      this.type = this.navParams.get("type");
      this.currentGroup = this.navParams.get("currentGroup") || null;

      if (this.currentGroup != null) {

        this.txtNameGroup = this.currentGroup.groupName;
        this.emailList = this.currentGroup.members.map(function (currentMember) { return currentMember.email; });
        this.championshipList = this.currentGroup.championships.map(function (currentChampionship) { return currentChampionship.name });
        this.txtTypeGroup = this.currentGroup.type;
      }

      if (this.type == 'C') {
        this.token = this.navParams.get("token");
        this.parentPage = this.navParams.get("parentPage");
      }
    }

    addFriend() {

      this.alertCtrl.create(
        {
          title: 'Nuevo invitado',
          message: 'Ingresa el em@il de tu invitado',
          inputs: [
            {
              name: 'friendEmail',
              placeholder: 'e-m@il',
              type: 'email'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => { console.log("Operation Cancelada"); }
            },
            {
              text: 'Agregar',
              handler: (data) => {
                console.log('New Email: ' + JSON.stringify(data));
                this.emailList.push(data.friendEmail);
              }
            }
          ]
        }
      ).present();

    }

    addTrophy() {

      let championshipPrompt = this.alertCtrl.create(
        {
          title: 'Campeonatos',
          subTitle: 'Seleccione el campeonato que desea agregar',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => { console.log("Operation Cancelada"); }
            },
            {
              text: 'Agregar',
              handler: (data) => {
                let loadingElement = this.loadingCtrl.create({
                  content: 'Realizando operación',
                  duration: 2000
                });
                loadingElement.present();
                //TODO a request to the server and waiting for its response
                loadingElement.dismiss();
              }
            }
          ]
        }
      );

      this.allChampionshipList.forEach(
        function (currentChamp) {
          championshipPrompt.addInput({
            type: 'radio',
            label: currentChamp.text,
            value: currentChamp.value.toString()
          });
        }
      );

      championshipPrompt.present();
    }

    createGroup() {

      console.log(this.emailList.join(','));

      if (this.txtNameGroup) {

        let bodyDatta = 'token=' + this.token
          + '&toEmails=' + this.emailList.join(',')
          + '&nameGroup=' + this.txtNameGroup,
          loadBox = this.loadingCtrl.create(
            {
              content: 'Creando grupo...'
            }
          );

        if (this.chbPublic) { bodyDatta += '&isPublic=true' };

        loadBox.present();
        this.http.post<any>(
          Constants.END_POINT_SANDBOX + 'group',
          bodyDatta,
          Constants.HEADERS_OPTIONS
        )
          .timeout(10000)
          .subscribe(data => {

            let response = data;
            console.log("Group created");
            console.log(response);
            loadBox.dismiss();
            
            this.alertCtrl.create(
              {
                title: 'Grupo creado',
                message: 'Grupo creado exitosamente ',
                buttons: ['Ok']
              }
            ).present();
            this.viewCtrl.dismiss();
            let that = this;
            this.viewCtrl.onDidDismiss(function () {
              console.log('it was created a new group, we will update the data');
              that.parentPage.getGroups();
            });

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
          subTitle: 'Para poder crear un grupo al menos debe de ingresar el nombre del grupo',
          buttons: ["Aceptar"]
        }).present();
      }

      
    }

    deleteChampionship(currentIndex: number) {

      this.alertCtrl.create(
        {
          title: 'Eliminar Campeonato',
          subTitle: '¿Seguro que desea eliminar el campeonato ' + this.championshipList[currentIndex] + '?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => { console.log('Operation canceled'); }
            },
            {
              text: 'Eliminar',
              handler: () => { this.championshipList.splice(currentIndex, 1); }
            }
          ]
        }
      ).present();
    }

    deleteFriend(currentIndex:number) {

      this.alertCtrl.create(
        {
          title: 'Eliminar Invitado',
          subTitle: '¿Seguro que desea eliminar al invitado ' + this.emailList[currentIndex] + '?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => { console.log('Operation canceled'); }
            },
            {
              text: 'Eliminar',
              handler: () => { this.emailList.splice(currentIndex, 1); }
            }
          ]
        }
      ).present();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad new_groupPage');
    }

    dismiss() {

      this.viewCtrl.dismiss();
    }

}
