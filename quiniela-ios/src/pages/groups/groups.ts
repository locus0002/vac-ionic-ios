import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, NavParams, ActionSheetController, Platform, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { NewChampionshipPage } from '../new_championship/new_championship';
import { NewGroupPage } from '../new_group/new_group';
import { DataParser } from '../../services/dataParser';
import * as Constants from '../../services/constants';
import 'rxjs/add/operator/timeout';
/*
  Generated class for the groups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-groups',
    templateUrl: 'groups.html'
})
export class GroupsPage {

    groupList: Array<{
      id: string,
      invitationCode: string,
      key: string,
      nameGroup: string,
      type: string,
      numberOfMembers: string,
      administratorName: string
    }>;

    championshipList: Array<{
      id: string,
      nameChampionship: string,
      status: string,
      startDate: string,
      endDate: string
    }>;

    currentUser: { token: string, name: string, flagFB: boolean, balance: number };

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                public platform: Platform,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public http: HttpClient,
                public dataParserCtrl: DataParser) {

      this.currentUser = this.navParams.get("currentUser") || null;
      this.getGroups(true);
      this.getChampionships();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad groupsPage');
    }

    addChampionship(groupIndex:number) {

      this.modalCtrl.create(NewChampionshipPage,
        {
          championshipList: this.championshipList,
          token: this.currentUser.token,
          groupKey: this.groupList[groupIndex].key
        }).present();
    }

    addFriendRequest(groupIndex:number, emailFriend:string) {

      let bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[0].key + '&name=' + this.groupList[0].nameGroup + '&toEmails=' + emailFriend,
        loadBox = this.loadingCtrl.create(
          {
            content: 'Enviando invitación...'
          }
        );

      loadBox.present();
      this.http.post<any>(
        Constants.END_POINT_SANDBOX + 'group/invite',
        bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          loadBox.dismiss();
          this.alertCtrl.create({

            title: 'Invitación enviada con éxito',
            subTitle: 'Operación exitosa',
            buttons: ["Aceptar"]

          }).present();

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
    }

    createGroup() {

      this.modalCtrl.create(NewGroupPage, { type: 'C', token: this.currentUser.token, parentPage: this }).present();
    }

    deleteGroup(groupIndex: number) {

      this.alertCtrl.create(
        {
          title: 'Eliminar',
          message: '¿Desea eliminar el grupo?',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => { console.log("Operation Cancelada"); }
            },
            {
              text: 'Eliminar',
              handler: () => {
                this.deleteGroupRequest(groupIndex);
              }
            }
          ]
        }
      ).present();
    }

    deleteGroupRequest(groupIndex: number) {

      let bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[groupIndex].key + '&name=' + this.groupList[groupIndex].nameGroup,
        loadBox = this.loadingCtrl.create(
          {
            content: 'Eliminando grupo...'
          }
        );

      loadBox.present();
      this.http.post<any>(
        Constants.END_POINT_SANDBOX + 'group/delete',
        bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          loadBox.dismiss();
          this.groupList.splice(groupIndex, 1);
          this.alertCtrl.create({

            title: 'Grupo eliminado con éxito',
            subTitle: 'Operación exitosa',
            buttons: ["Aceptar"]

          }).present();

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
    }

    getGroups(showLoading) {

      let bodyDatta = 'manager=false&token=' + this.currentUser.token,
          loadBox = this.loadingCtrl.create(
            {
              content: 'Obteniendo tus grupos...'
            }
          );

      if (showLoading) { loadBox.present(); }
      this.http.get<any>(
        Constants.END_POINT_SANDBOX + 'groups?' + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          this.groupList = this.dataParserCtrl.parseGroupData(data);
          if (showLoading) { loadBox.dismiss(); }

        }, error => {

          if (showLoading) { loadBox.dismiss(); }
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

    inviteFriends(groupIndex:number) {

      let newFriendAlert = this.alertCtrl.create(
        {
          title: 'Invitar a grupo',
          message: 'Ingresa el em@il de tu amigo',
          inputs: [
            {
              name: 'friendEmail',
              placeholder: 'e-m@il',
              type:'email'
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
              handler: (dataAlert) => {
                if (dataAlert.friendEmail) {

                  this.addFriendRequest(groupIndex, dataAlert.friendEmail);
                } else {

                  this.alertCtrl.create({
                    title: 'Validar',
                    subTitle: 'Tienes que ingresar un email valido',
                    buttons:["Aceptar"]
                  }).present();
                }
              }
            }
          ]
        }
      );

      newFriendAlert.present();
    }

    showGroupMenu(groupIndex:number) {

      this.actionSheetCtrl.create(
        {
          title: 'Opciones',
          buttons: [
            {
              text: 'Invitar a un amigo',
              icon: !this.platform.is('ios') ? 'contact' : null,
              handler: () => { this.inviteFriends(groupIndex); } 
            },
            {
              text: 'Agregar campeonato al grupo',
              icon: !this.platform.is('ios') ? 'trophy' : null,
              handler: () => { this.addChampionship(groupIndex); } 
            },
            {
              text: 'Modificar Tipo',
              icon: !this.platform.is('ios') ? 'create' : null,
              handler: () => { this.modifyGroup(groupIndex); } 
            },
            {
              text: 'Eliminar Grupo',
              icon: !this.platform.is('ios') ? 'trash' : null,
              handler: () => { this.deleteGroup(groupIndex); } 
            },
            {
              text: 'Ver grupo',
              icon: !this.platform.is('ios') ? 'information-circle' : null,
              handler: () => { this.viewGroup(groupIndex); }
            },
            {
              text: 'Cancelar',
              role:'cancel',
              icon: !this.platform.is('ios') ? 'close' : null
            }
          ]
        }
      ).present();
    }

    modifyGroup(groupIndex:number) {

      this.alertCtrl.create(
        {
          title: 'Modificar',
          message: '¿Desea modificar el tipo del grupo?',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => { console.log("Operation Cancelada"); }
            },
            {
              text: 'Modificar',
              handler: () => {
                this.modifyGroupRequest(groupIndex)
              }
            }
          ]
        }
      ).present();
    }

    modifyGroupRequest(groupIndex:number) {

      let bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[groupIndex].key + '&name=' + this.groupList[groupIndex].nameGroup + '&type=' + Constants.GROUP_TYPE[this.groupList[groupIndex].type],
        loadBox = this.loadingCtrl.create(
          {
            content: 'Modificando grupo...'
          }
        );

      loadBox.present();
      this.http.post<any>(
        Constants.END_POINT_SANDBOX + 'group/switch-type',
        bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          loadBox.dismiss();
          this.groupList[groupIndex].type = this.groupList[groupIndex].type == 'PRIVADO' ? 'PUBLICO' : 'PRIVADO';
          this.alertCtrl.create({

            title: 'Grupo modificado con éxito',
            subTitle: 'Operación exitosa',
            buttons: ["Aceptar"]

          }).present();

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
    }

    viewGroup(groupIndex: number) {

      let bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[groupIndex].key,
        loadBox = this.loadingCtrl.create(
          {
            content: 'Procesando...'
          }
        );

      loadBox.present();
      this.http.get<any>(
        Constants.END_POINT_SANDBOX + 'group?' + bodyDatta,
        Constants.HEADERS_OPTIONS
      )
        .timeout(10000)
        .subscribe(data => {

          let currentDetailGroup = this.dataParserCtrl.parserDetailGroupData(data);
          this.modalCtrl.create(NewGroupPage, { type: 'V', currentGroup: currentDetailGroup }).present();
          loadBox.dismiss();

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
    }

}
