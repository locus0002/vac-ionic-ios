webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return END_POINT_SANDBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HEADERS_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GROUP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GROUP_TYPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEAM_IMAGE_PATH; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);

var END_POINT_SANDBOX = 'http://192.168.1.73:8081/';
//export const END_POINT_SANDBOX = 'https://www.juegaquinielas.com/';
var HEADERS_OPTIONS = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Accept': 'application/json, text/plain'
    }) };
var GROUP_TYPE = { 'PRIVADO': 1, 'PUBLICO': 2 };
var GROUP_TYPE_ID = { 1: 'PRIVADO', 2: 'PUBLICO' };
var GENDER = { 'male': 2, 'female': 1 };
var TEAM_IMAGE_PATH = {
    'Puebla': 'assets/imgs/mx_teams/ns.png',
    'Tigres UANL': 'assets/imgs/mx_teams/tigres.png',
    'América': 'assets/imgs/mx_teams/america.png',
    'León': 'assets/imgs/mx_teams/leon.png',
    'Querétaro': 'assets/imgs/mx_teams/queretaro.png',
    'Atlas': 'assets/imgs/mx_teams/atlas.png',
    'Chivas': 'assets/imgs/mx_teams/chivas.png',
    'Cruz Azul': 'assets/imgs/mx_teams/cruz_azul.png',
    'Lobos BUAP': 'assets/imgs/mx_teams/lobos.png',
    'Morelia': 'assets/imgs/mx_teams/morelia.png',
    'Monterrey': 'assets/imgs/mx_teams/mty.png',
    'Necaxa': 'assets/imgs/mx_teams/neca.png',
    'Pachuca': 'assets/imgs/mx_teams/pachuca.png',
    'Santos': 'assets/imgs/mx_teams/santos.png',
    'Tijuana': 'assets/imgs/mx_teams/tijuana.png',
    'Toluca': 'assets/imgs/mx_teams/toluca.png',
    'UNAM': 'assets/imgs/mx_teams/pumas.png',
    'Veracruz': 'assets/imgs/mx_teams/vera.png',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_table_position_table__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__score_score__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quinielas_quinielas__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pop_menu_pop_menu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_constants__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, alertCtrl, http, popoverCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.currentUser = this.navParams.get("currentUser") || null;
        this.getBalance(false);
    }
    DashboardPage.prototype.getCredit = function () {
        var _this = this;
        if (this.currentUser) {
            this.alertCtrl.create({
                title: 'Actualizar',
                subTitle: 'Se actualizarán sus datos',
                buttons: [{
                        text: 'Aceptar',
                        handler: function () { _this.getBalance(true); }
                    }]
            }).present();
            var bodyDatta = 'token=' + this.currentUser.token;
            window.open(__WEBPACK_IMPORTED_MODULE_9__services_constants__["a" /* END_POINT_SANDBOX */] + 'payu-money?' + bodyDatta, '_system');
        }
        else {
            this.alertCtrl.create({
                title: 'Ha ocurrido un problema al obtener tus datos',
                subTitle: 'Cierra sesión y vuelve a ingresar',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    DashboardPage.prototype.getBalance = function (showLoader) {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token, loadBox = null;
        if (showLoader) {
            loadBox = this.loadingCtrl.create({
                content: 'Actualizando...'
            });
            loadBox.present();
        }
        console.log("TokenFB", this.currentUser.token);
        this.http.get(__WEBPACK_IMPORTED_MODULE_9__services_constants__["a" /* END_POINT_SANDBOX */] + 'credits/balance?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_9__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            if (showLoader) {
                loadBox.dismiss();
            }
            console.log("data", data);
            _this.currentUser.balance = parseFloat(data.current);
        }, function (error) {
            console.log("ERROR_GET_BALANCE", error);
            console.log("ERROR_GET_BALANCE", JSON.stringify(error));
            if (showLoader) {
                loadBox.dismiss();
            }
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad dashboardPage');
    };
    DashboardPage.prototype.play = function () {
        if (this.currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__quinielas_quinielas__["a" /* QuinielaPage */], { currentUser: this.currentUser });
        }
        else {
            this.alertCtrl.create({
                title: 'Ha ocurrido un problema al obtener tus datos',
                subTitle: 'Cierra sesión y vuelve a ingresar',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    DashboardPage.prototype.showMenu = function (myEvent) {
        var _this = this;
        var popMenu = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pop_menu_pop_menu__["a" /* menuPopover */], { token: this.currentUser.token, flagFB: this.currentUser.flagFB });
        popMenu.present({ ev: myEvent });
        popMenu.onDidDismiss(function (data) {
            if (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            }
        });
    };
    DashboardPage.prototype.viewGroups = function () {
        if (this.currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__groups_groups__["a" /* GroupsPage */], { currentUser: this.currentUser });
        }
        else {
            this.alertCtrl.create({
                title: 'Ha ocurrido un problema al obtener tus datos',
                subTitle: 'Cierra sesión y vuelve a ingresar',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    DashboardPage.prototype.viewPositionTable = function () {
        if (this.currentUser) {
            console.log("VIEW_SCORE", this.currentUser);
            console.log("VIEW_SCORE", JSON.stringify(this.currentUser));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__position_table_position_table__["a" /* PositionTablePage */], { currentUser: this.currentUser });
        }
        else {
            this.alertCtrl.create({
                title: 'Ha ocurrido un problema al obtener tus datos',
                subTitle: 'Cierra sesión y vuelve a ingresar',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    DashboardPage.prototype.viewScore = function () {
        if (this.currentUser) {
            console.log("VIEW_SCORE", this.currentUser);
            console.log("VIEW_SCORE", JSON.stringify(this.currentUser));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__score_score__["a" /* ScorePage */], { currentUser: this.currentUser });
        }
        else {
            this.alertCtrl.create({
                title: 'Ha ocurrido un problema al obtener tus datos',
                subTitle: 'Cierra sesión y vuelve a ingresar',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="showMenu($event)">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n    <ion-title text-wrap >{{currentUser.name}} [${{currentUser.balance}}]</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class="back-image">\n\n  <ion-card>\n    <button ion-item (click)="play()">\n      <ion-thumbnail item-left>\n        <img src="assets/imgs/trophy_dash.png" />\n      </ion-thumbnail>\n      <h1><strong>Jugar</strong></h1>\n      <p text-wrap>Diviertete haciendo tu quiniela</p>\n    </button>\n  </ion-card>\n\n  <ion-card>\n    <button ion-item (click)="viewGroups()">\n      <ion-thumbnail item-left>\n        <img src="assets/imgs/group_dash.png" />\n      </ion-thumbnail>\n      <h1><strong>Grupos</strong></h1>\n      <p text-wrap>Administra tus grupos</p>\n    </button>\n  </ion-card>\n\n  <ion-card>\n    <button ion-item (click)="viewPositionTable()">\n      <ion-thumbnail item-left>\n        <img src="assets/imgs/list_dash.png" />\n      </ion-thumbnail>\n      <h1><strong>Tabla General</strong></h1>\n      <p text-wrap>Resultados de los partidos</p>\n    </button>\n  </ion-card>\n\n  <ion-card>\n    <button ion-item (click)="viewScore()">\n      <ion-thumbnail item-left>\n        <img src="assets/imgs/score_dash.png" />\n      </ion-thumbnail>\n      <h1><strong>Puntuación</strong></h1>\n      <p text-wrap>Resultado de tu quiniela</p>\n    </button>\n  </ion-card>\n\n  <ion-card>\n    <button ion-item (click)="getCredit()">\n      <ion-thumbnail item-left>\n        <img src="assets/imgs/money_dash.png" />\n      </ion-thumbnail>\n      <h1><strong>Obtener Dinero</strong></h1>\n      <p text-wrap>Crédito y Movimientos</p>\n    </button>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_championship_new_championship__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_group_new_group__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dataParser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the groups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, navParams, actionSheetCtrl, platform, alertCtrl, loadingCtrl, modalCtrl, http, dataParserCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.dataParserCtrl = dataParserCtrl;
        this.currentUser = this.navParams.get("currentUser") || null;
        this.getGroups(true);
        this.getChampionships();
    }
    GroupsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad groupsPage');
    };
    GroupsPage.prototype.addChampionship = function (groupIndex) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__new_championship_new_championship__["a" /* NewChampionshipPage */], {
            championshipList: this.championshipList,
            token: this.currentUser.token,
            groupKey: this.groupList[groupIndex].key
        }).present();
    };
    GroupsPage.prototype.addFriendRequest = function (groupIndex, emailFriend) {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[0].key + '&name=' + this.groupList[0].nameGroup + '&toEmails=' + emailFriend, loadBox = this.loadingCtrl.create({
            content: 'Enviando invitación...'
        });
        loadBox.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* END_POINT_SANDBOX */] + 'group/invite', bodyDatta, __WEBPACK_IMPORTED_MODULE_6__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            loadBox.dismiss();
            _this.alertCtrl.create({
                title: 'Invitación enviada con éxito',
                subTitle: 'Operación exitosa',
                buttons: ["Aceptar"]
            }).present();
        }, function (error) {
            loadBox.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    GroupsPage.prototype.createGroup = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_group_new_group__["a" /* NewGroupPage */], { type: 'C', token: this.currentUser.token, parentPage: this }).present();
    };
    GroupsPage.prototype.deleteGroup = function (groupIndex) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Eliminar',
            message: '¿Desea eliminar el grupo?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () { console.log("Operation Cancelada"); }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteGroupRequest(groupIndex);
                    }
                }
            ]
        }).present();
    };
    GroupsPage.prototype.deleteGroupRequest = function (groupIndex) {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[groupIndex].key + '&name=' + this.groupList[groupIndex].nameGroup, loadBox = this.loadingCtrl.create({
            content: 'Eliminando grupo...'
        });
        loadBox.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* END_POINT_SANDBOX */] + 'group/delete', bodyDatta, __WEBPACK_IMPORTED_MODULE_6__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            loadBox.dismiss();
            _this.groupList.splice(groupIndex, 1);
            _this.alertCtrl.create({
                title: 'Grupo eliminado con éxito',
                subTitle: 'Operación exitosa',
                buttons: ["Aceptar"]
            }).present();
        }, function (error) {
            loadBox.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    GroupsPage.prototype.getGroups = function (showLoading) {
        var _this = this;
        var bodyDatta = 'manager=false&token=' + this.currentUser.token, loadBox = this.loadingCtrl.create({
            content: 'Obteniendo tus grupos...'
        });
        if (showLoading) {
            loadBox.present();
        }
        this.http.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* END_POINT_SANDBOX */] + 'groups?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_6__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            _this.groupList = _this.dataParserCtrl.parseGroupData(data);
            if (showLoading) {
                loadBox.dismiss();
            }
        }, function (error) {
            if (showLoading) {
                loadBox.dismiss();
            }
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    GroupsPage.prototype.getChampionships = function () {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token;
        this.http.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* END_POINT_SANDBOX */] + 'championships?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_6__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            _this.championshipList = _this.dataParserCtrl.parserChampionshipData(data);
        }, function (error) {
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    GroupsPage.prototype.inviteFriends = function (groupIndex) {
        var _this = this;
        var newFriendAlert = this.alertCtrl.create({
            title: 'Invitar a grupo',
            message: 'Ingresa el em@il de tu amigo',
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
                    handler: function () { console.log("Operation Cancelada"); }
                },
                {
                    text: 'Agregar',
                    handler: function (dataAlert) {
                        if (dataAlert.friendEmail) {
                            _this.addFriendRequest(groupIndex, dataAlert.friendEmail);
                        }
                        else {
                            _this.alertCtrl.create({
                                title: 'Validar',
                                subTitle: 'Tienes que ingresar un email valido',
                                buttons: ["Aceptar"]
                            }).present();
                        }
                    }
                }
            ]
        });
        newFriendAlert.present();
    };
    GroupsPage.prototype.showGroupMenu = function (groupIndex) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Opciones',
            buttons: [
                {
                    text: 'Invitar a un amigo',
                    icon: !this.platform.is('ios') ? 'contact' : null,
                    handler: function () { _this.inviteFriends(groupIndex); }
                },
                {
                    text: 'Agregar campeonato al grupo',
                    icon: !this.platform.is('ios') ? 'trophy' : null,
                    handler: function () { _this.addChampionship(groupIndex); }
                },
                {
                    text: 'Modificar Tipo',
                    icon: !this.platform.is('ios') ? 'create' : null,
                    handler: function () { _this.modifyGroup(groupIndex); }
                },
                {
                    text: 'Eliminar Grupo',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () { _this.deleteGroup(groupIndex); }
                },
                {
                    text: 'Ver grupo',
                    icon: !this.platform.is('ios') ? 'information-circle' : null,
                    handler: function () { _this.viewGroup(groupIndex); }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null
                }
            ]
        }).present();
    };
    GroupsPage.prototype.modifyGroup = function (groupIndex) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Modificar',
            message: '¿Desea modificar el tipo del grupo?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () { console.log("Operation Cancelada"); }
                },
                {
                    text: 'Modificar',
                    handler: function () {
                        _this.modifyGroupRequest(groupIndex);
                    }
                }
            ]
        }).present();
    };
    GroupsPage.prototype.modifyGroupRequest = function (groupIndex) {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[groupIndex].key + '&name=' + this.groupList[groupIndex].nameGroup + '&type=' + __WEBPACK_IMPORTED_MODULE_6__services_constants__["c" /* GROUP_TYPE */][this.groupList[groupIndex].type], loadBox = this.loadingCtrl.create({
            content: 'Modificando grupo...'
        });
        loadBox.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* END_POINT_SANDBOX */] + 'group/switch-type', bodyDatta, __WEBPACK_IMPORTED_MODULE_6__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            loadBox.dismiss();
            _this.groupList[groupIndex].type = _this.groupList[groupIndex].type == 'PRIVADO' ? 'PUBLICO' : 'PRIVADO';
            _this.alertCtrl.create({
                title: 'Grupo modificado con éxito',
                subTitle: 'Operación exitosa',
                buttons: ["Aceptar"]
            }).present();
        }, function (error) {
            loadBox.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    GroupsPage.prototype.viewGroup = function (groupIndex) {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token + '&group=' + this.groupList[groupIndex].key, loadBox = this.loadingCtrl.create({
            content: 'Procesando...'
        });
        loadBox.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* END_POINT_SANDBOX */] + 'group?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_6__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            var currentDetailGroup = _this.dataParserCtrl.parserDetailGroupData(data);
            _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_group_new_group__["a" /* NewGroupPage */], { type: 'V', currentGroup: currentDetailGroup }).present();
            loadBox.dismiss();
        }, function (error) {
            loadBox.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/groups/groups.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Grupos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image">\n\n  <ion-fab top right edge>\n    <button ion-fab color="secondary" (click)="createGroup()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-card *ngFor="let currentGroup of groupList; let i = index;">\n    <ion-item text-wrap >\n      <ion-avatar item-left>\n        <img src="assets/imgs/group-icon.png" />\n      </ion-avatar>\n      <h2><strong>Nombre: </strong>{{currentGroup.nameGroup}}</h2>\n      <p><strong>Tipo: </strong>{{currentGroup.type}}</p>\n      <p><strong># de Miembros: </strong>{{currentGroup.numberOfMembers}}</p>\n      <p><strong>Código de invitación : </strong>{{currentGroup.invitationCode}}</p>\n      <button ion-button clear item-end item-right (click)="showGroupMenu(i)">Ver</button>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/groups/groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_dataParser__["a" /* DataParser */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChampionshipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the new_championship page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var NewChampionshipPage = /** @class */ (function () {
    function NewChampionshipPage(navCtrl, navParams, viewCtrl, alertCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.championshipList = this.navParams.get("championshipList") || [];
        this.token = this.navParams.get("token") || '';
        this.groupKey = this.navParams.get("groupKey") || "";
    }
    NewChampionshipPage.prototype.addChampionship = function () {
        var _this = this;
        if (this.txtAmount && this.ddlChampionship) {
            var bodyDatta = 'token=' + this.token + '&group=' + this.groupKey + '&mount=' + this.txtAmount + '&championship=' + this.ddlChampionship, loadBox_1 = this.loadingCtrl.create({
                content: 'Enviando invitación...'
            });
            loadBox_1.present();
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* END_POINT_SANDBOX */] + 'group/championship', bodyDatta, __WEBPACK_IMPORTED_MODULE_3__services_constants__["e" /* HEADERS_OPTIONS */])
                .timeout(10000)
                .subscribe(function (data) {
                loadBox_1.dismiss();
                _this.alertCtrl.create({
                    title: 'Campeonato agregado con éxito',
                    subTitle: 'Operación exitosa',
                    buttons: ["Aceptar"]
                }).present();
                _this.viewCtrl.dismiss();
            }, function (error) {
                loadBox_1.dismiss();
                var errorMesage = "", errorTitle = "";
                if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpErrorResponse */]) {
                    errorMesage = error.error;
                    errorTitle = "Error";
                }
                else {
                    errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                    errorTitle = "Servicio no disponible";
                }
                _this.alertCtrl.create({
                    title: errorTitle,
                    message: errorMesage,
                    buttons: ['Aceptar']
                }).present();
            });
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                subTitle: 'Ningún campo puede ir vacío ',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    NewChampionshipPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad new_championshipPage');
    };
    NewChampionshipPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewChampionshipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new_championship',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/new_championship/new_championship.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-wrap>Agregar campeonato</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-image">\n  <ion-card>\n    <br />\n\n    <ion-card-content>\n\n      <ion-card-title>\n        <div text-center ><strong text-center>Agregar campeonato al grupo</strong></div>\n      </ion-card-title>\n\n      <ion-list >\n\n        <ion-item>\n          <ion-icon name="logo-usd" item-left></ion-icon>\n          <ion-input [(ngModel)]="txtAmount" type="number" placeholder="Cantidad por jornada $" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="trophy" item-left></ion-icon>\n          <ion-select [(ngModel)]="ddlChampionship" >\n            <ion-option *ngFor="let currentChampionship of championshipList" value="{{currentChampionship.id}}">\n              {{currentChampionship.nameChampionship}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n\n    <div text-center>\n      <button class="button-card" ion-button color="primary" full icon-right (click)="addChampionship()">\n        Agregar\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n    </div>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/new_championship/new_championship.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], NewChampionshipPage);
    return NewChampionshipPage;
}());

//# sourceMappingURL=new_championship.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the new_group page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var NewGroupPage = /** @class */ (function () {
    function NewGroupPage(navCtrl, navParams, viewCtrl, alertCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.emailList = [];
        this.championshipList = [];
        this.type = this.navParams.get("type");
        this.currentGroup = this.navParams.get("currentGroup") || null;
        if (this.currentGroup != null) {
            this.txtNameGroup = this.currentGroup.groupName;
            this.emailList = this.currentGroup.members.map(function (currentMember) { return currentMember.email; });
            this.championshipList = this.currentGroup.championships.map(function (currentChampionship) { return currentChampionship.name; });
            this.txtTypeGroup = this.currentGroup.type;
        }
        if (this.type == 'C') {
            this.token = this.navParams.get("token");
            this.parentPage = this.navParams.get("parentPage");
        }
    }
    NewGroupPage.prototype.addFriend = function () {
        var _this = this;
        this.alertCtrl.create({
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
                    handler: function () { console.log("Operation Cancelada"); }
                },
                {
                    text: 'Agregar',
                    handler: function (data) {
                        console.log('New Email: ' + JSON.stringify(data));
                        _this.emailList.push(data.friendEmail);
                    }
                }
            ]
        }).present();
    };
    NewGroupPage.prototype.addTrophy = function () {
        var _this = this;
        var championshipPrompt = this.alertCtrl.create({
            title: 'Campeonatos',
            subTitle: 'Seleccione el campeonato que desea agregar',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () { console.log("Operation Cancelada"); }
                },
                {
                    text: 'Agregar',
                    handler: function (data) {
                        var loadingElement = _this.loadingCtrl.create({
                            content: 'Realizando operación',
                            duration: 2000
                        });
                        loadingElement.present();
                        //TODO a request to the server and waiting for its response
                        loadingElement.dismiss();
                    }
                }
            ]
        });
        this.allChampionshipList.forEach(function (currentChamp) {
            championshipPrompt.addInput({
                type: 'radio',
                label: currentChamp.text,
                value: currentChamp.value.toString()
            });
        });
        championshipPrompt.present();
    };
    NewGroupPage.prototype.createGroup = function () {
        var _this = this;
        console.log(this.emailList.join(','));
        if (this.txtNameGroup) {
            var bodyDatta = 'token=' + this.token
                + '&toEmails=' + this.emailList.join(',')
                + '&nameGroup=' + this.txtNameGroup, loadBox_1 = this.loadingCtrl.create({
                content: 'Creando grupo...'
            });
            if (this.chbPublic) {
                bodyDatta += '&isPublic=true';
            }
            ;
            loadBox_1.present();
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* END_POINT_SANDBOX */] + 'group', bodyDatta, __WEBPACK_IMPORTED_MODULE_3__services_constants__["e" /* HEADERS_OPTIONS */])
                .timeout(10000)
                .subscribe(function (data) {
                var response = data;
                console.log("Group created");
                console.log(response);
                loadBox_1.dismiss();
                _this.alertCtrl.create({
                    title: 'Grupo creado',
                    message: 'Grupo creado exitosamente ',
                    buttons: ['Ok']
                }).present();
                _this.viewCtrl.dismiss();
                var that = _this;
                _this.viewCtrl.onDidDismiss(function () {
                    console.log('it was created a new group, we will update the data');
                    that.parentPage.getGroups();
                });
            }, function (error) {
                loadBox_1.dismiss();
                var errorMesage = "", errorTitle = "";
                if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                    errorMesage = error.error;
                    errorTitle = "Error";
                }
                else {
                    errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                    errorTitle = "Servicio no disponible";
                }
                _this.alertCtrl.create({
                    title: errorTitle,
                    message: errorMesage,
                    buttons: ['Aceptar']
                }).present();
            });
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                subTitle: 'Para poder crear un grupo al menos debe de ingresar el nombre del grupo',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    NewGroupPage.prototype.deleteChampionship = function (currentIndex) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Eliminar Campeonato',
            subTitle: '¿Seguro que desea eliminar el campeonato ' + this.championshipList[currentIndex] + '?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { console.log('Operation canceled'); }
                },
                {
                    text: 'Eliminar',
                    handler: function () { _this.championshipList.splice(currentIndex, 1); }
                }
            ]
        }).present();
    };
    NewGroupPage.prototype.deleteFriend = function (currentIndex) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Eliminar Invitado',
            subTitle: '¿Seguro que desea eliminar al invitado ' + this.emailList[currentIndex] + '?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { console.log('Operation canceled'); }
                },
                {
                    text: 'Eliminar',
                    handler: function () { _this.emailList.splice(currentIndex, 1); }
                }
            ]
        }).present();
    };
    NewGroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad new_groupPage');
    };
    NewGroupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new_group',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/new_group/new_group.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title *ngIf="type == \'C\'">Nuevo Grupo</ion-title>\n    <ion-title *ngIf="type == \'E\'">Grupo</ion-title>\n    <ion-title *ngIf="type == \'V\'">Detalle del Grupo</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image" >\n\n  <ion-fab bottom right *ngIf="type == \'C\'">\n    <button ion-fab color="secondary" (click)="createGroup()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-list-header text-center>\n      <br />\n      <h2 *ngIf="type == \'C\'"><strong> Crear Grupo </strong></h2>\n      <h1 *ngIf="type == \'V\'"><strong> Grupo: {{currentGroup.groupName}} </strong></h1>\n      <h2 *ngIf="type == \'V\'"><strong> Código de invitación: {{currentGroup.invitationCode}} </strong></h2>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name="people" item-left></ion-icon>\n      <ion-input *ngIf="type == \'C\'" type="text" placeholder="Ingrese el nombre del grupo" [(ngModel)]="txtNameGroup"></ion-input>\n      <ion-input *ngIf="type == \'V\'" type="text" placeholder="Ingrese el nombre del grupo" [(ngModel)]="txtNameGroup" readonly="true" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label *ngIf="type == \'C\'">Publico</ion-label>\n      <ion-label *ngIf="type == \'V\'">Tipo</ion-label>\n      <ion-checkbox *ngIf="type == \'C\'" [(ngModel)]="chbPublic"></ion-checkbox>\n      <ion-input *ngIf="type == \'V\'" type="text" [(ngModel)]="txtTypeGroup" readonly="true"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <br />\n      <h2><strong> Invitados</strong></h2>\n    </ion-list-header>\n\n    <ion-item *ngFor="let currentEmail of emailList; let i = index;">\n        <ion-icon name="body" item-left ></ion-icon>\n        {{currentEmail}}\n        <button *ngIf="type == \'C\'" ion-button outline item-right clear icon-left color="primary" (click)="deleteFriend(i)">\n          <ion-icon name="trash" item-left></ion-icon>\n        </button>\n        <button *ngIf="type == \'V\'" ion-button outline item-right clear icon-left color="primary" disabled >\n          <ion-icon name="trash" item-left></ion-icon>\n        </button>\n      </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header *ngIf="type == \'V\'" >\n      <br />\n      <h2><strong> Campeonatos</strong></h2>\n    </ion-list-header>\n\n    <ion-item *ngFor="let currentChampionship of championshipList; let i = index;">\n        <ion-icon name="trophy" item-left ></ion-icon>\n        {{currentChampionship}}\n        <button *ngIf="type == \'C\'" ion-button outline item-right clear icon-left color="primary" (click)="deleteChampionship(i)">\n          <ion-icon name="trash" item-left></ion-icon>\n        </button>\n\n      <button *ngIf="type == \'V\'" ion-button outline item-right clear icon-left color="primary" disabled>\n          <ion-icon name="trash" item-left></ion-icon>\n        </button>\n      </ion-item>\n  </ion-list>\n\n  <p text-center>\n\n    <button *ngIf="type == \'C\'" ion-button icon-left (click)="addFriend()" >\n      <ion-icon name="person-add" ></ion-icon>\n      Agregar a un amigo\n    </button>\n\n    <button *ngIf="type == \'V\'" ion-button icon-left disabled >\n      <ion-icon name="person-add" ></ion-icon>\n      Agregar a un amigo\n    </button>\n\n  </p>\n\n  <p text-center>\n\n    <button *ngIf="type == \'T\'" ion-button icon-left (click)="addTrophy()" >\n      <ion-icon name="trophy" ></ion-icon>\n      Agregar campeonato\n    </button>\n\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/new_group/new_group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewGroupPage);
    return NewGroupPage;
}());

//# sourceMappingURL=new_group.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dataParser__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the position_table page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PositionTablePage = /** @class */ (function () {
    function PositionTablePage(navCtrl, navParams, alertCtrl, loadingCtrl, http, dataParserCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.dataParserCtrl = dataParserCtrl;
        this.championshipList = [];
        this.currentTeams = [];
        this.currentUser = this.navParams.get("currentUser") || null;
        this.getChampionships();
    }
    PositionTablePage.prototype.getPositions = function (championshipId) {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token + '&championship=' + championshipId, loadingElement = this.loadingCtrl.create({
            content: 'Cargando campeonato...',
        });
        loadingElement.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* END_POINT_SANDBOX */] + 'standing-scores/championship?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_3__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            _this.currentTeams = _this.dataParserCtrl.parserPositionTableData(data);
            loadingElement.dismiss();
        }, function (error) {
            loadingElement.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    PositionTablePage.prototype.getChampionships = function () {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* END_POINT_SANDBOX */] + 'championships?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_3__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            _this.championshipList = _this.dataParserCtrl.parserChampionshipData(data);
        }, function (error) {
            console.log("ERROR_GET_CHAMPIONSHIP", error);
            console.log("ERROR_GET_CHAMPIONSHIP", JSON.stringify(error));
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    PositionTablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad position_tablePage');
    };
    PositionTablePage.prototype.selectChampionship = function () {
        var _this = this;
        var championshipPrompt = this.alertCtrl.create({
            title: 'Campeonatos',
            subTitle: 'Seleccione el campeonato que desea visualizar ',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () { console.log("Operation Cancelada"); }
                },
                {
                    text: 'Seleccionar',
                    handler: function (data) {
                        _this.getPositions(data);
                    }
                }
            ]
        });
        this.championshipList.forEach(function (currentChamp) {
            championshipPrompt.addInput({
                type: 'radio',
                label: currentChamp.nameChampionship,
                value: currentChamp.id.toString()
            });
        });
        championshipPrompt.present();
    };
    PositionTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-position_table',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/position_table/position_table.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" >\n    <ion-title text-wrap>Posiciones tabla general</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image" >\n\n  <ion-fab top right edge >\n    <button ion-fab color="secondary" (click)="selectChampionship()">\n      <ion-icon name="search" ></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-card *ngFor="let currentTeam of currentTeams" >\n    <ion-item text-wrap>\n      <ion-thumbnail item-left >\n        <img [src]="currentTeam.imagePath" />\n      </ion-thumbnail>\n      <h2>Equipo: {{currentTeam.teamName}}</h2>\n      <p>Puntos: {{currentTeam.points}}</p>\n      <p>Diferencia: {{currentTeam.difference}}</p>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/position_table/position_table.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__services_dataParser__["a" /* DataParser */]])
    ], PositionTablePage);
    return PositionTablePage;
}());

//# sourceMappingURL=position_table.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dataParser__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the score page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ScorePage = /** @class */ (function () {
    function ScorePage(navCtrl, navParams, dataParserCtrl, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataParserCtrl = dataParserCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.currentUser = this.navParams.get("currentUser") || null;
        this.getMyScore();
    }
    ScorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad scorePage');
    };
    ScorePage.prototype.getMyScore = function () {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token, loadingElement = this.loadingCtrl.create({
            content: 'Cargando puntuación...',
        });
        loadingElement.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* END_POINT_SANDBOX */] + 'participant/scores?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_3__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            _this.scoreList = _this.dataParserCtrl.parserScoreData(data);
            loadingElement.dismiss();
        }, function (error) {
            console.log("ERROR_GET_MYSCORE", error);
            console.log("ERROR_GET_MYSCORE", JSON.stringify(error));
            loadingElement.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    ScorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-score',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/score/score.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" >\n    <ion-title>Puntuación </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image" >\n\n  <ion-card *ngFor="let currentScore of scoreList">\n    <ion-item text-wrap >\n      <ion-thumbnail item-left>\n        <img src="assets/imgs/register-icon.png" />\n      </ion-thumbnail>\n      <h2>Grupo: {{currentScore.groupName}}</h2>\n      <p text-wrap>Campeonato: {{currentScore.championshipName}}</p>\n      <p>Puntos: {{currentScore.pointsAccumulated}}</p>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/score/score.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_dataParser__["a" /* DataParser */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ScorePage);
    return ScorePage;
}());

//# sourceMappingURL=score.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuinielaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_journey_detail_journey__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dataParser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the quinielas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var QuinielaPage = /** @class */ (function () {
    function QuinielaPage(navCtrl, navParams, actionSheetCtrl, platform, http, alertCtrl, loadingCtrl, dataParserCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataParserCtrl = dataParserCtrl;
        this.currentUser = this.navParams.get("currentUser") || null;
        this.getJourneys("journey");
        this.getJourneys("historical");
    }
    QuinielaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad quinielasPage');
    };
    QuinielaPage.prototype.getJourneys = function (type) {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token, loadingElement = this.loadingCtrl.create({
            content: 'Cargando...',
        });
        loadingElement.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + (type == 'journey' ? 'pool/matches?' : 'pool/matches/historial?') + bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            if (type == 'journey') {
                _this.journeyList = _this.dataParserCtrl.parserJourneyData(data);
            }
            else {
                _this.historicalList = _this.dataParserCtrl.parserJourneyData(data);
            }
            loadingElement.dismiss();
        }, function (error) {
            loadingElement.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    QuinielaPage.prototype.showMenuDetailJourney = function (index, type) {
        var _this = this;
        var buttons = [
            {
                text: 'Detalle de la jornada',
                icon: !this.platform.is('ios') ? 'information-circle' : null,
                handler: function () { _this.viewDetailJourney(index, type); }
            },
            {
                text: 'Hacer quiniela',
                icon: !this.platform.is('ios') ? 'list-box' : null,
                handler: function () { _this.viewDetailJourney(index, type); }
            },
            {
                text: 'Cancelar',
                role: 'cancel',
                icon: !this.platform.is('ios') ? 'close' : null
            }
        ];
        type == 'H' ? buttons.splice(1, 1) : buttons.splice(0, 1);
        this.actionSheetCtrl.create({
            title: 'Opciones',
            buttons: buttons
        }).present();
    };
    QuinielaPage.prototype.viewDetailJourney = function (index, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_journey_detail_journey__["a" /* DetailJourneyPage */], { parentPage: this, currentUser: this.currentUser, currentJourney: (type == 'Q' ? this.journeyList[index] : this.historicalList[index]), type: type });
    };
    QuinielaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quinielas',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/quinielas/quinielas.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" >\n    <ion-title>Quiniela</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="primary" >\n    <ion-segment text-wrap [(ngModel)]="journeys" color="white" >\n      <ion-segment-button value="available">\n        Jornadas disponibles\n      </ion-segment-button>\n      <ion-segment-button value="historical">\n        Historial\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class="back-image" >\n\n  <div [ngSwitch]="journeys" >\n\n    <ion-list *ngSwitchCase="\'available\'" >\n      <ion-item *ngFor="let currentJourneyA of journeyList; let i = index;" >\n        <ion-card >\n          <ion-item text-wrap >\n            <ion-thumbnail item-left>\n              <img src="assets/imgs/soccer-ball.png" />\n            </ion-thumbnail>\n            <h2>Jornada: {{currentJourneyA.journeyName}}</h2>\n            <h2>Campeonato: {{currentJourneyA.championshipName}}</h2>\n            <p>Limite: {{currentJourneyA.limitDate}}</p>\n            <p>Grupo: {{currentJourneyA.groupName}}</p>\n            <button ion-button clear item-end item-right (click)="showMenuDetailJourney(i, \'Q\')">Ver</button>\n          </ion-item>\n        </ion-card>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'historical\'" >\n      <ion-item *ngFor="let currentJourneyH of historicalList;let i = index;" >\n        <ion-card >\n          <ion-item text-wrap >\n            <ion-thumbnail item-left>\n              <img src="assets/imgs/soccer-ball.png" />\n            </ion-thumbnail>\n            <h2>Jornada: {{currentJourneyH.journeyName}}</h2>\n            <h2>Campeonato: {{currentJourneyH.championshipName}}</h2>\n            <p>Limite: {{currentJourneyH.limitDate}}</p>\n            <p>Grupo: {{currentJourneyH.groupName}}</p>\n            <button ion-button clear item-end item-right (click)="showMenuDetailJourney(i, \'H\')">Ver</button>\n          </ion-item>\n        </ion-card>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/quinielas/quinielas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__services_dataParser__["a" /* DataParser */]])
    ], QuinielaPage);
    return QuinielaPage;
}());

//# sourceMappingURL=quinielas.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailJourneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_forecast_detail_forecast__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dataParser__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the detail_journey page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DetailJourneyPage = /** @class */ (function () {
    function DetailJourneyPage(navCtrl, navParams, alertCtrl, loadingCtrl, modalCtrl, http, dataParserCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.dataParserCtrl = dataParserCtrl;
        this.currentPools = [];
        this.currentUser = this.navParams.get("currentUser") || null;
        this.currentJourney = this.navParams.get("currentJourney") || null;
        this.type = this.navParams.get("type");
        this.paramKey = encodeURIComponent(this.dataParserCtrl.buildSaltKey(this.currentJourney.limitDate, parseInt(this.currentJourney.id), parseInt(this.currentJourney.groupId)));
        this.getDetailJouney();
        this.parentPage = this.navParams.get("parentPage");
    }
    DetailJourneyPage.prototype.getDetailJouney = function () {
        var _this = this;
        var bodyDatta = 'token=' + this.currentUser.token + "&key=" + this.paramKey, loadingElement = this.loadingCtrl.create({
            content: 'Cargando...',
        });
        loadingElement.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + (this.type == 'Q' ? 'pool/match?' : 'pool/match/historial?') + bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            _this.detailJourney = _this.dataParserCtrl.parserDetailJourney(data);
            loadingElement.dismiss();
        }, function (error) {
            loadingElement.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    DetailJourneyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad detail_journeyPage');
    };
    DetailJourneyPage.prototype.sendQuiniela = function () {
        var _this = this;
        if (this.currentPools.length == this.detailJourney.length) {
            var bodyDatta = 'token=' + this.currentUser.token + '&key=' + this.paramKey + '&pools=' + JSON.stringify(this.currentPools), loadBox_1 = this.loadingCtrl.create({
                content: 'Enviando quiniela....'
            });
            loadBox_1.present();
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + 'pool', bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
                .timeout(10000)
                .subscribe(function (data) {
                loadBox_1.dismiss();
                _this.alertCtrl.create({
                    title: 'Quiniela enviada',
                    message: 'La operación se realizó de manera exitosa. ',
                    buttons: ['Aceptar']
                }).present();
                _this.parentPage.getJourneys("journey");
                _this.parentPage.getJourneys("historical");
                _this.navCtrl.pop();
            }, function (error) {
                loadBox_1.dismiss();
                var errorMesage = "", errorTitle = "";
                if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                    errorMesage = error.error;
                    errorTitle = "Error";
                }
                else {
                    errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                    errorTitle = "Servicio no disponible";
                }
                _this.alertCtrl.create({
                    title: errorTitle,
                    message: errorMesage,
                    buttons: ['Aceptar']
                }).present();
            });
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                subTitle: 'La quínela no se puede enviar a menos de que todos los pronósticos de los encuentros se hallan llenado.',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    DetailJourneyPage.prototype.updateForecast = function (index) {
        var _this = this;
        console.log("Pools");
        console.log(JSON.stringify(this.currentPools));
        var bodyDatta = 'token=' + this.currentUser.token + "&key=" + this.paramKey + "&result=" + this.detailJourney[index].matchNumber, loadingElement = this.loadingCtrl.create({
            content: 'Cargando...',
        });
        loadingElement.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + 'pool/match/teams?' + bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            var currentMatchData = _this.dataParserCtrl.parserMatchData(data);
            loadingElement.dismiss();
            var currentModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detail_forecast_detail_forecast__["a" /* DetailForecastPage */], {
                currentPools: _this.currentPools,
                matchData: currentMatchData,
                parentPage: _this,
                indexDetailMatch: index
            });
            currentModal.present();
        }, function (error) {
            loadingElement.dismiss();
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    DetailJourneyPage.prototype.updateForecastData = function (index, matchData) {
        this.detailJourney[index].forecast = matchData.team.val + " - " + matchData.team2.val;
    };
    DetailJourneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail_journey',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/detail_journey/detail_journey.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-wrap>{{currentJourney.journeyName}}</ion-title>\n  </ion-navbar>\n\n  <ion-navbar color="primary">\n    <ion-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Campeonato: {{currentJourney.championshipName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="back-image" >\n\n  <ion-fab bottom right *ngIf="type == \'Q\'">\n    <button ion-fab color="secondary" (click)="sendQuiniela()">\n      <ion-icon name="send"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-card *ngFor="let currentMatch of detailJourney;let i = index;">\n\n    <ion-row no-padding>\n      <ion-col col-1></ion-col>\n      <ion-col col-5> <img [src]="currentMatch.imageTeamPathA" /> </ion-col>\n      <ion-col col-5> <img [src]="currentMatch.imageTeamPathB" /> </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n\n    <ion-card-content>\n      <ion-card-title text-center>\n        {{currentMatch.teamNameA}} vs {{currentMatch.teamNameB}}\n      </ion-card-title>\n      <h2 text-center><strong>Encuentro: </strong>{{currentMatch.matchNumber}}</h2>\n      <h2 text-center><strong>Marcador: </strong>{{currentMatch.score}}</h2>\n      <h2 text-center><strong>Pronostico: </strong>{{currentMatch.forecast}}</h2>\n      <h2 text-center><strong>Puntos: </strong>{{currentMatch.points}}</h2>\n\n    </ion-card-content>\n    <ion-row no-padding *ngIf="type == \'Q\'">\n      <ion-col text-center>\n        <button ion-button clear small color="primary" icon-left (click)="updateForecast(i)">\n          <ion-icon name="create"></ion-icon>\n          Actualizar\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/detail_journey/detail_journey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_dataParser__["a" /* DataParser */]])
    ], DetailJourneyPage);
    return DetailJourneyPage;
}());

//# sourceMappingURL=detail_journey.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailForecastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dataParser__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the detail_forecast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DetailForecastPage = /** @class */ (function () {
    function DetailForecastPage(navCtrl, navParams, viewCtrl, alertCtrl, loadingCtrl, dataParserCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataParserCtrl = dataParserCtrl;
        this.http = http;
        this.currentPool = { team: {}, team2: {} };
        this.currentPools = this.navParams.get("currentPools");
        this.currentMatchData = this.navParams.get("matchData");
        this.parentPage = this.navParams.get("parentPage");
        this.indexDetailMatch = this.navParams.get("indexDetailMatch");
    }
    DetailForecastPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailForecastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad detail_forecastPage');
    };
    DetailForecastPage.prototype.setScore = function (type) {
        var _this = this;
        this.alertCtrl.create({
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
                    handler: function (data) { console.log("Operation canceled"); }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        if (type == 'A') {
                            if (data.txtForecast || data.txtForecast == '0') {
                                _this.currentPool.team = { "id": _this.currentMatchData.teamIdA, "val": data.txtForecast };
                                _this.currentMatchData.forecastA = data.txtForecast;
                            }
                        }
                        else {
                            if (data.txtForecast || data.txtForecast == '0') {
                                _this.currentPool.team2 = { "id": _this.currentMatchData.teamIdB, "val": data.txtForecast };
                                _this.currentMatchData.forecastB = data.txtForecast;
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    DetailForecastPage.prototype.updateForecast = function () {
        if (this.currentPool.team.id && this.currentPool.team2.id) {
            this.addMatchData();
            this.alertCtrl.create({
                title: 'Pronostico actualizado',
                message: 'La operación se realizó de manera exitosa.',
                buttons: ['Aceptar']
            }).present();
            var that_1 = this;
            this.viewCtrl.onDidDismiss(function () { that_1.parentPage.updateForecastData(that_1.indexDetailMatch, that_1.currentPool); });
            this.viewCtrl.dismiss();
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                message: 'No puede estar ningún campo vacío.',
                buttons: ['Aceptar']
            }).present();
        }
    };
    DetailForecastPage.prototype.addMatchData = function () {
        var that = this;
        if (this.currentPools.length > 0) {
            var indexFound = this.currentPools.findIndex(function (currentPoolElement) {
                return that.currentPool.team.id == currentPoolElement.team.id;
            });
            if (indexFound > -1) {
                this.currentPools[indexFound].team.val = this.currentPool.team.val;
                this.currentPools[indexFound].team2.val = this.currentPool.team2.val;
            }
            else {
                this.currentPools.push(this.currentPool);
            }
        }
        else {
            this.currentPools.push(this.currentPool);
        }
    };
    DetailForecastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail_forecast',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/detail_forecast/detail_forecast.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Pronostico del encuentro</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image">\n\n  <ion-list>\n    <ion-list-header text-center>\n      <h3><strong> Ingresa los resultados del Encuentro</strong></h3>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img [src]="currentMatchData.imageTeamPathA" />\n      </ion-thumbnail>\n      <h2>{{currentMatchData.teamNameA}}</h2>\n      <p>Pronostico: {{currentMatchData.forecastA}}</p> <!--MODIFICAR ESTE VALOR-->\n      <button ion-button outline item-right clear color="primary" icon-left (click)="setScore(\'A\')" >\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img [src]="currentMatchData.imageTeamPathB" />\n      </ion-thumbnail>\n      <h2>{{currentMatchData.teamNameB}}</h2>\n      <p>Pronostico: {{currentMatchData.forecastB}}</p> <!--MODIFICAR ESTE VALOR-->\n      <button ion-button outline item-right clear color="primary" icon-left (click)="setScore(\'B\')">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n  <br />\n  <p text-center >\n    <button ion-button icon-left (click)="updateForecast()" >\n      <ion-icon name="send" ></ion-icon>\n      Actualizar\n    </button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/detail_forecast/detail_forecast.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_dataParser__["a" /* DataParser */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DetailForecastPage);
    return DetailForecastPage;
}());

//# sourceMappingURL=detail_forecast.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menuPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the pop_menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var menuPopover = /** @class */ (function () {
    function menuPopover(navCtrl, navParams, modalCtrl, alertCtrl, loadingCtrl, http, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.token = this.navParams.get("token");
        this.flagFB = this.navParams.get("flagFB");
    }
    menuPopover.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad pop_menuPage');
    };
    menuPopover.prototype.modifyPassword = function () {
        if (this.flagFB) {
            this.alertCtrl.create({
                title: 'Información',
                subTitle: 'Has ingresado con Facebook, esta opción no está disponible',
                buttons: ["Aceptar"]
            }).present();
        }
        else {
            this.viewCtrl.dismiss();
            this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation__["a" /* ConfirmationModal */], { token: this.token, type: "Modal_MC" }).present();
        }
    };
    menuPopover.prototype.logout = function () {
        var _this = this;
        var bodyDatta = 'token=' + this.token, loadBox = this.loadingCtrl.create({
            content: 'Conectando...'
        });
        loadBox.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + 'logout', bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
            .timeout(10000)
            .subscribe(function (data) {
            console.log(data);
            loadBox.dismiss();
            _this.viewCtrl.dismiss(true);
            //this.navCtrl.setRoot(LoginPage);
        }, function (error) {
            loadBox.dismiss();
            console.log("error", error);
            var errorMesage = "", errorTitle = "";
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errorMesage = error.error;
                errorTitle = "Error";
            }
            else {
                errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                errorTitle = "Servicio no disponible";
            }
            _this.alertCtrl.create({
                title: errorTitle,
                message: errorMesage,
                buttons: ['Aceptar']
            }).present();
        });
    };
    menuPopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pop_menu',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/pop_menu/pop_menu.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-list>\n    <button ion-item text-wrap (click)="modifyPassword()">\n      Modificar contraseña\n    </button>\n    <button ion-item text-wrap (click)="logout()">\n      Cerrar sesión\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/pop_menu/pop_menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */]])
    ], menuPopover);
    return menuPopover;
}());

//# sourceMappingURL=pop_menu.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_n_conditions_terms_n_conditions__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the register_data page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RegisterDataPage = /** @class */ (function () {
    function RegisterDataPage(navCtrl, navParams, loadingCtrl, alertCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
    }
    RegisterDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad register_dataPage');
    };
    RegisterDataPage.prototype.saveContinue = function () {
        var _this = this;
        if (this.validateMandatoryData()) {
            if (this.validateBirthDate() && this.validateConfirmationData('password') && this.validateConfirmationData('email')) {
                var bodyDatta = 'InputName=' + this.txtName
                    + '&InputLastName=' + this.txtLastName
                    + '&Inputmail=' + this.txtEmail
                    + '&InputUser=' + this.txtEmail
                    + '&InputPass1=' + this.txtPassword
                    + '&inlineRadioOptions=' + this.ddlGenre
                    + '&InputEmail1=' + this.txtEmail, loadBox_1 = this.loadingCtrl.create({
                    content: 'Conectando...'
                });
                loadBox_1.present();
                this.http.post(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* END_POINT_SANDBOX */] + 'register-native', bodyDatta, __WEBPACK_IMPORTED_MODULE_5__services_constants__["e" /* HEADERS_OPTIONS */])
                    .timeout(10000)
                    .subscribe(function (data) {
                    console.log(data);
                    loadBox_1.dismiss();
                    _this.alertCtrl.create({
                        title: 'Estas a un paso',
                        message: 'Te hemos enviado un código de validación a tu email',
                        buttons: ['Aceptar']
                    }).present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__confirmation_confirmation__["a" /* ConfirmationModal */], { type: 'Page', email: _this.txtEmail });
                }, function (error) {
                    loadBox_1.dismiss();
                    var errorMesage = "", errorTitle = "";
                    if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                        errorMesage = error.error;
                        errorTitle = "Error";
                    }
                    else {
                        errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                        errorTitle = "Servicio no disponible";
                    }
                    _this.alertCtrl.create({
                        title: errorTitle,
                        message: errorMesage,
                        buttons: ['Aceptar']
                    }).present();
                });
            }
        }
    };
    RegisterDataPage.prototype.showTermsNConditions = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__terms_n_conditions_terms_n_conditions__["a" /* TermsNConditionsPage */]).present();
    };
    RegisterDataPage.prototype.validateMandatoryData = function () {
        if (!(this.txtName
            && this.txtLastName
            && this.txtEmail
            && this.txtEmailConfirmation
            && this.txtPassword
            && this.txtPasswordConfirmation
            && this.ddlBirthDate
            && this.chbAccept
            && this.ddlGenre)) {
            this.alertCtrl.create({
                title: "Validar",
                subTitle: "Ningún campo puede estar vacío",
                buttons: ["Aceptar"]
            }).present();
            return false;
        }
        return true;
    };
    RegisterDataPage.prototype.validateConfirmationData = function (type) {
        switch (type) {
            case "password":
                if (this.txtPassword != this.txtPasswordConfirmation) {
                    this.alertCtrl.create({
                        title: "Validar",
                        subTitle: "Las contraseñas no coinciden ",
                        buttons: ["Aceptar"]
                    }).present();
                    return false;
                }
                break;
            case "email":
                if (this.txtPassword != this.txtPasswordConfirmation) {
                    this.alertCtrl.create({
                        title: "Validar",
                        subTitle: "Lo correos electrónicos no coinciden",
                        buttons: ["Aceptar"]
                    }).present();
                    return false;
                }
                break;
        }
        return true;
    };
    RegisterDataPage.prototype.validateBirthDate = function () {
        var birthDate = new Date(this.ddlBirthDate), today = new Date();
        if ((today.getFullYear() - birthDate.getFullYear()) < 18) {
            this.alertCtrl.create({
                title: "Validar",
                subTitle: "Debes ser mayor de edad para poder concursar",
                buttons: ["Aceptar"]
            }).present();
            return false;
        }
        return true;
    };
    RegisterDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register_data',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/register_data/register_data.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image" >\n  <ion-card>\n    <br />\n\n    <ion-card-content>\n\n      <ion-card-title>\n        <div text-center ><strong text-center>Datos</strong></div>\n      </ion-card-title>\n\n      <ion-list >\n\n        <ion-item>\n          <ion-icon name="contact" item-left></ion-icon>\n          <ion-input type="text" [(ngModel)]="txtName" placeholder="Nombre" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="contact" item-left></ion-icon>\n          <ion-input type="text" [(ngModel)]="txtLastName" placeholder="Apellidos" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="at" item-left></ion-icon>\n          <ion-input type="email" [(ngModel)]="txtEmail" placeholder="tu@email.aqui"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="at" item-left></ion-icon>\n          <ion-input type="email" [(ngModel)]="txtEmailConfirmation" placeholder="Confirmación em@il"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="key" item-left></ion-icon>\n          <ion-input type="password" [(ngModel)]="txtPassword" placeholder="Contraseña" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="key" item-left></ion-icon>\n          <ion-input type="password" [(ngModel)]="txtPasswordConfirmation" placeholder="Confirmación contraseña" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="calendar" item-left></ion-icon>\n          <ion-datetime placeholder="Fecha de nacimiento" displayFormat="DD MMM YYYY" [(ngModel)]="ddlBirthDate"\n                        monthNames="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"\n                        monthShortNames="Ene, Feb, Mar, Abr, May, Jun, Jul, Agos, Sep, Oct, Nov, Dic"\n                        cancelText="Cancelar"\n                        doneText="Aceptar"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="transgender" item-left></ion-icon>\n          <ion-select [(ngModel)]="ddlGenre" >\n            <ion-option value="2"> Hombre </ion-option>\n            <ion-option value="1"> Mujer </ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label> Acepto <a> términos y condiciones </a> </ion-label>\n          <ion-checkbox color="green" (click)="showTermsNConditions()" [(ngModel)]="chbAccept" ></ion-checkbox>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n\n    <div text-center>\n      <button class="button-card" ion-button color="primary" full icon-right (click)="saveContinue()">\n        Registrar\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n    </div>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/register_data/register_data.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
    ], RegisterDataPage);
    return RegisterDataPage;
}());

//# sourceMappingURL=register_data.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsNConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the terms_n_conditions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TermsNConditionsPage = /** @class */ (function () {
    function TermsNConditionsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    TermsNConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad terms_n_conditionsPage');
    };
    TermsNConditionsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TermsNConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms_n_conditions',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/terms_n_conditions/terms_n_conditions.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" >\n    <ion-title>Aviso de Privacidad</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image">\n\n  <ion-card>\n\n    <ion-card-header>\n      Aviso de Privacidad\n    </ion-card-header>\n\n    <ion-card-content text-justify>\n      <p>\n        Responsable de los datos personales, Gomaiz CIA S.A de C.V., con domicilio en Enrique Ibsen número 43, interior 102, Col. Polanco III sección, Del. Miguel Hidalgo, C.P. 11550. Tiene la convicción de proteger la información personal de los visitantes a esta página web mediante el uso de formatos en línea o cuando nos envías un correo electrónico con tus detalles. También recolectamos la información de las transacciones realizadas incluyendo los detalles de las tarjetas de crédito, débito u otros medios de pago que son utilizadas. La información personal que recolectamos debe incluir: Nombre, Dirección de email, Dirección de domicilio, Número telefónico, Datos de tarjeta de crédito/débito, Fecha de nacimiento y otra información recolectada en el momento del registro o mediante inspecciones realizadas por nosotros, o por medio de empresas contratadas por nosotros para dicho propósito.\n      </p>\n\n      <h3>Uso de la Información Personal</h3>\n      <h3>Procesamos la información personal con los siguientes propósitos:</h3>\n      <ul>\n        <li>Crear y manejar la cuenta del jugador y sus registros.</li>\n        <li>Administrar la cuenta del jugador.</li>\n        <li>Proporcionar y personalizar nuestros servicios.</li>\n        <li>Encargarse de tus preguntas y solicitudes.</li>\n        <li>Notificar acerca de nuestras actualizaciones en el software y/o servicios.</li>\n        <li>Asegurarnos de cumplir todas nuestras responsabilidades regulatorias verificando la precisión de cualquier información recibida;</li>\n        <li>La regulación de nuestro acuerdo de conformidad, prevención de delitos y prosecución de infractores incluyendo, cuando sea apropiado, el manejo de la solicitud de información por parte de autoridades deportivas o cualquier otra entidad autorizada con el propósito de compartir información</li>\n        <li>Llevar a cabo estudios para campañas de mercadeo.</li>\n        <li>Ofrecer a los jugadores información y soporte sobre nuestros productos y servicios.</li>\n        <li>Marketing de nuestros productos y servicios o aquellos ofrecidos por nuestros grupos de compañías.</li>\n        <li>Mantener cualquiera de los propósitos indicados específicamente en el momento en el que nos proporciones tu información personal</li>\n        <li>Cuenta de Clabe Interbancaria.</li>\n        <li>Fecha de vencimiento de la tarjeta de crédito o débito.</li>\n        <li>CVV (Número de seguridad de la tarjeta de crédito o débito).</li>\n        <li>Número de tarjeta de crédito o débito.</li>\n      </ul>\n      <p>\n        Estos son los "Propósitos" por los cuales recolectamos información personal. Si NO deseas recibir nuestros correos, por favor envíanos un correo electrónico en blanco con la palabra "Remover" en el asunto a:  soporte@juegaquinielas.com\n      </p>\n\n      <h3>Divulgación de Información Personal.</h3>\n      <p>\n        Por los Propósitos anteriormente mencionados, nosotros podremos revelar tu información personal a cualquiera de los siguientes destinatarios ("Destinatarios"):\n      </p>\n      \n      <ol>\n        <li>Cualquier compañía dentro de nuestro grupo y a los empleados dentro de estas que deban conocer dicha información.</li>\n        <li>Cualquier tercera persona que ofrezca servicios a nosotros con el fin de permitirnos proporcionarte nuestros servicios de juegos, incluyendo, por ejemplo, procesamiento de pagos y verificación de datos.</li>\n        <li>Cualquier tercera persona que nos proporciones servicios relacionados con la operación de Gomaiz CIA S.A de C.V.</li>\n        <li>Cualquier auditor, contratista u otra clase de consejero que se encuentre realizando alguna auditoría a cualquiera de nuestros procesos de negocio, o que tenga la necesidad de acceder a dicha información con el propósito de asesorarnos.</li>\n        <li>Cualquier cuerpo regulatorio, deportivo o entidad autorizada por cualquier requerimiento razonable para acceder a dicha información personal.</li>\n        <li>Cualquier comprador potencial de la empresa o cualquier inversionista o compañía dentro del grupo.</li>\n      </ol>\n      \n      <h3>TRATAMIENTO DE DATOS PERSONALES:</h3>\n      <p>\n        Gomaiz CIA S.A de C.V., podrá solicitar y/o recolector a través del Sitio y Otros Medios Datos Personales de los usuarios para su uso comercial, divulgación y/o almacenamiento por cualquier medio o tratamiento para los fines abajo señalados. Gomaiz CIA S.A de C.V., y/o cualquier tercero que llegue a intervenir en cualquier fase del tratamiento de los Datos Personales guardara confidencialidad respecto de los mismos cuando tengan dicho carácter, conforme a las disipaciones de las legales aplicables a los Estados Unidos Mexicanos.\n      </p>\n\n      <h3>CONSENTIMIENTO.</h3>\n\n      <p>\n        El ingreso o/registro de datos personales implica el consentimiento pleno y sin reservas de los usuarios para su uso comercial, divulgación y/o almacenamiento por cualquier tercero que llegue a intervenir en cualquier fase de tratamiento de datos personales.\n      </p>\n\n      <h3>SITIO WEB Y APLICACIONES.</h3>\n\n      <p>\n        Nuestro sitio web registra automáticamente las direcciones IP tanto para la operación del mismo como para realizar un análisis estadístico sobre el tráfico del sitio. NO registramos direcciones de correo electrónico de los visitantes del sitio web.\n      </p>\n\n      <h3>POLÍTICA DE E-MAILS.</h3>\n\n      <ul>\n        <li>No toleraremos spam.</li>\n        <li>Hemos recibido tu consentimiento para comunicarnos vía e-mail.</li>\n        <li>Te enviaremos e-mails promocionales y actualizaciones hasta que nos informes que no deseas seguir recibiéndolos.</li>\n        <li>Puedes notificarnos si deseas darte de baja de nuestro servicio de e-mails en todo momento del día, a través de los siguientes medios favor de escríbenos a:  soporte.@juegaquinielas.com</li>\n      </ul>\n      \n\n      <h3>GANANCIAS.</h3>\n\n      <p>\n        Tus ganancias y retiros son estrictamente confidenciales, la información relacionada a los retiros es guardada y protegida con los mejores sistemas de protección de datos. Gomaiz CIA S.A de C.V., no revelará la información sobre tus ganancias a terceros, a menos que la misma sea solicitada mediante una instancia legal, por alguna autoridad gubernamental o ente regulador competente.\n      </p>\n\n      <h3>SEGURIDAD.</h3>\n\n      <p>\n        Juega Quinielas utiliza diferentes métodos para asegurar la confidencialidad de la información de sus clientes. Para transferir la información utilizamos tecnologías de codificación y, una vez archivada en nuestros servidores, la misma es conservada de modo seguro gracias a lo último en protección de datos disponible en la actualidad.\n      </p>\n\n      <p>Si tienes preguntas o dudas con respecto a la confidencialidad y protección de los datos, puedes contactar a nuestro servicio de atención al cliente, disponible las 24 horas del día, los 7 días de la semana.</p>\n\n      <strong>MEDIOS PARA EJERCER LOS DERECHOS DE LOS TITULARES DE DATOS PERSONALES Y REVOCACIÓN DEL CONSENTIMIENTO.</strong>\n      <p>\n        El Titular, por sí o mediante representante legal debidamente acreditado, tiene reconocidos y podrá ejercitar los Derechos ARCO que le otorga la LFPDPPP frente al o el responsable, presentando solicitud por medio electrónico al correo:  soporte@juegaquinielas.com en donde nuestros ejecutivos le brindarán atención y darán trámite a su solicitud.\n      </p>\n\n      <ul>\n        <li>ACCESO: conocer información específica que el responsable tiene en su posesión.</li>\n        <li>RECTIFICACIÓN: solicitar la rectificación de Datos Personales en caso de que no estén actualizados, sean inexactos o incompletos, para ejercer este derecho se deberá entregar la documentación que acredite la rectificación solicitada de acuerdo con los Datos Personales.</li>\n        <li>CANCELACIÓN: bloqueo y posterior eliminación de Datos Personales de nuestras bases de datos cuando considere que la misma no está siendo utilizada adecuadamente o para los fines que dieron origen a la relación jurídica.</li>\n        <li>OPOSICIÓN: oponerse al uso para fines específicos de sus Datos Personales.</li>\n      </ul>\n\n      <p>\n        El ejercicio de cualquiera de los derechos ARCO no impide el ejercicio de alguno otro. Para ello el Titular o su representante legal podrán solicitar un formato de ejercicio de Derechos ARCO a la dirección de correo electrónico soporte@juegaquinielas.com en adelante el “Formato”. Dicho Formato se deberá llenar, firmar y devolver a la misma dirección de correo electrónico acompañado de la documentación que más adelante se señala, misma que deberá enviarse para su evaluación escaneada y legible, con objeto de que el responsable pueda llevar a cabo la autenticación del Titular que requiera ejercer sus Derechos ARCO:\n      </p>\n\n      <ul>\n        <li>\n          Identificación oficial vigente del Titular Será válido alguno de los siguientes documentos: Credencial del Instituto Federal Electoral, Pasaporte emitido por la Secretaría de Relaciones Exteriores, Cartilla del servicio Militar Nacional o Cédula Profesional).\n        </li>\n        <li>\n          En los casos en que el Titular ejerza sus Derechos ARCO a través de un representante legal, además de acreditar la identidad de ambos (Titular y el Representante legal), se deberá enviar a la citada dirección de correo, una copia legible del poder notarial otorgado al representante lega\n        </li>\n        <li>Acceder a sus datos personales.</li>\n        <li>Rectificar sus datos personales sean inexactos o incompletos.</li>\n        <li>Cancelar sus datos personales.</li>\n        <li>Oponerse por causa legitima al tratamiento de sus datos personales en cualquier momento, a fin de que se deje hacer uso de los mismos.</li>\n        <li>La descripción clara y precisa de los datos personales respecto de los que busca ejercer alguno de los derechos antes mencionados (en el caso de rectificar se deberá indicar las modificaciones a realizar o aportar y la documentación que sustenta su petición.</li>\n        <li>Cualquier otro elemento o documento que facilite la localización de los datos personales.</li>\n        <li>Para efecto de lo anterior Gomaiz CIA S.A de C.V., pone a disposición de los usuarios el siguiente correo: soporte@juegaquinielas.com</li>\n      </ul>\n\n      <p>\n        Gomaiz CIA S.A DE C.V., dará respuesta a la solicitud de los usuarios en un plazo mayor a 15 días hábiles contados a partir de la fecha en que reciba la petición que corresponda, a través del correo electrónico que se haya sido proporcionado para tal efecto. El ejercicio por parte de los derechos antes mencionados deberá sujetarse a las leyes y reglamentos aplicables vigentes en México.\n      </p>\n\n      <h3>COOKIES, WEB Y APP.</h3>\n      <p>\n        Con el objetivo de mejorar la experiencia de sus usuarios en el sitio web, Gomaiz CIA S.A de C.V., podrá utilizar cookies. Para efectos del presente aviso de privacidad cookies se identificará como los archivos de texto de información que un sitio web transfiera al disco duro de la computadora o dispositivo móvil. De los usuarios con el objeto almacenar ciertos registros de preferencia.\n      </p>\n      \n      <p>\n        Gomaiz CIA S.A de C.V., puede utilizar cookies, para mejorar el entendimiento de la interacción de los usuarios con el sitio y los servicios que se proporcionan. El servicio que puede permitir publicidad o funciones de terceros que envían “cookies” a las computadoras y dispositivos móviles de los usuarios.\n      </p>\n      \n\n      <h3>DATOS PERSONALES SENSIBLES.</h3>\n\n      <p>\n        De conformidad con la legislación mexicana vigente, se conoce como datos personales sensibles a aquellos que puedan revelar aspectos como origen racial o étnico, de salud presente y futuro, información genética, creencias religiosas, filosóficas, morales, afiliación sindical, opiniones políticas, preferencia sexual entre otras.\n      </p>\n\n      <h3>CAMBIOS AL AVISO DE PRIVACIDAD.</h3>\n      <p>\n        Gomaiz CIA S.A de C.V., se reserva el derecho de modificar en cualquier momento el contenido del presente aviso de privacidad, cualquier en el aviso de privacidad le será informados a sus usuarios a través del sitio. Una vez que se publique el aviso de privacidad en el sitio tendrá validez automáticamente.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/terms_n_conditions/terms_n_conditions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], TermsNConditionsPage);
    return TermsNConditionsPage;
}());

//# sourceMappingURL=terms_n_conditions.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_data_register_data__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_confirmation_confirmation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_terms_n_conditions_terms_n_conditions__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_score_score__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pop_menu_pop_menu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_position_table_position_table__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_dataParser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_groups_groups__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_championship_new_championship__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_new_group_new_group__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_quinielas_quinielas__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_detail_journey_detail_journey__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_detail_forecast_detail_forecast__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_data_register_data__["a" /* RegisterDataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_confirmation_confirmation__["a" /* ConfirmationModal */],
                __WEBPACK_IMPORTED_MODULE_12__pages_terms_n_conditions_terms_n_conditions__["a" /* TermsNConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_score_score__["a" /* ScorePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pop_menu_pop_menu__["a" /* menuPopover */],
                __WEBPACK_IMPORTED_MODULE_15__pages_position_table_position_table__["a" /* PositionTablePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_championship_new_championship__["a" /* NewChampionshipPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_new_group_new_group__["a" /* NewGroupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_quinielas_quinielas__["a" /* QuinielaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detail_journey_detail_journey__["a" /* DetailJourneyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detail_forecast_detail_forecast__["a" /* DetailForecastPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_data_register_data__["a" /* RegisterDataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_confirmation_confirmation__["a" /* ConfirmationModal */],
                __WEBPACK_IMPORTED_MODULE_12__pages_terms_n_conditions_terms_n_conditions__["a" /* TermsNConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_score_score__["a" /* ScorePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pop_menu_pop_menu__["a" /* menuPopover */],
                __WEBPACK_IMPORTED_MODULE_15__pages_position_table_position_table__["a" /* PositionTablePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_championship_new_championship__["a" /* NewChampionshipPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_new_group_new_group__["a" /* NewGroupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_quinielas_quinielas__["a" /* QuinielaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detail_journey_detail_journey__["a" /* DetailJourneyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detail_forecast_detail_forecast__["a" /* DetailForecastPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__services_dataParser__["a" /* DataParser */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the dataParser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DataParser = /** @class */ (function () {
    function DataParser(http) {
        this.http = http;
        console.log('Hello dataParser Provider');
    }
    DataParser.prototype.parseGroupData = function (dataGroups) {
        if (dataGroups.length > 0) {
            return dataGroups.map(function (currentGroup) {
                var dataGroup = currentGroup[0].split('01z1h');
                return {
                    id: dataGroup[0],
                    invitationCode: dataGroup[1],
                    key: currentGroup[0],
                    nameGroup: currentGroup[1],
                    type: currentGroup[2],
                    numberOfMembers: currentGroup[3],
                    administratorName: currentGroup[4]
                };
            });
        }
        return [];
    };
    DataParser.prototype.parserDetailGroupData = function (dataDetailGroup) {
        return {
            type: __WEBPACK_IMPORTED_MODULE_2__services_constants__["d" /* GROUP_TYPE_ID */][dataDetailGroup.tipo],
            rolAdministrator: dataDetailGroup.administrador,
            invitationCode: dataDetailGroup.invitation,
            groupName: dataDetailGroup.nombre,
            championships: dataDetailGroup.championships.map(function (currentChampionship) {
                return {
                    id: currentChampionship[0],
                    name: currentChampionship[1],
                    startDate: currentChampionship[2],
                    endDate: currentChampionship[3],
                    amount: currentChampionship[4]
                };
            }),
            members: dataDetailGroup.participants.map(function (currentMember) {
                return {
                    name: currentMember[0],
                    email: currentMember[1],
                    status: currentMember[2],
                    memberType: currentMember[3]
                };
            })
        };
    };
    DataParser.prototype.parserChampionshipData = function (dataChampionships) {
        if (dataChampionships.length > 0) {
            return dataChampionships.map(function (currentChampionship) {
                return {
                    id: currentChampionship[0],
                    nameChampionship: currentChampionship[1],
                    status: currentChampionship[2],
                    startDate: currentChampionship[3],
                    endDate: currentChampionship[4]
                };
            });
        }
        return [];
    };
    DataParser.prototype.parserPositionTableData = function (dataPositionsTable) {
        if (dataPositionsTable.length > 0) {
            return dataPositionsTable.map(function (currentPosition) {
                return {
                    id: currentPosition[0],
                    teamName: currentPosition[2],
                    points: currentPosition[3],
                    difference: currentPosition[4],
                    imagePath: __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* TEAM_IMAGE_PATH */][currentPosition[2]]
                };
            });
        }
        return [];
    };
    DataParser.prototype.parserScoreData = function (dataScore) {
        if (dataScore.length > 0) {
            return dataScore.map(function (currentScore) {
                return {
                    groupName: currentScore[0],
                    championshipName: currentScore[1],
                    pointsAccumulated: currentScore[2]
                };
            });
        }
        return [];
    };
    DataParser.prototype.parserJourneyData = function (dataJourneys) {
        if (dataJourneys.length > 0) {
            return dataJourneys.map(function (currentJourney) {
                return {
                    id: currentJourney[0],
                    journeyName: currentJourney[1],
                    limitDate: currentJourney[2],
                    championshipName: currentJourney[3],
                    groupId: currentJourney[4],
                    groupName: currentJourney[5]
                };
            });
        }
        return [];
    };
    DataParser.prototype.parserDetailJourney = function (dataDetailJourney) {
        if (dataDetailJourney.length > 0) {
            return dataDetailJourney.map(function (currentDetailJourney) {
                var garbageA = currentDetailJourney[1].split("alt='Equip'>"), teamNameA = garbageA[1].split("vs")[0].trim(), teamNameB = garbageA[2].trim();
                return {
                    matchNumber: currentDetailJourney[0],
                    teamNameA: teamNameA,
                    teamNameB: teamNameB,
                    imageTeamPathA: __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* TEAM_IMAGE_PATH */][teamNameA],
                    imageTeamPathB: __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* TEAM_IMAGE_PATH */][teamNameB],
                    score: currentDetailJourney[2],
                    forecast: currentDetailJourney[3],
                    points: currentDetailJourney[4]
                };
            });
        }
        return [];
    };
    DataParser.prototype.parserMatchData = function (dataMatch) {
        if (dataMatch.length > 0) {
            return {
                teamNameA: dataMatch[0].name,
                teamIdA: dataMatch[0].id,
                imageTeamPathA: __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* TEAM_IMAGE_PATH */][dataMatch[0].name],
                forecastA: "",
                teamNameB: dataMatch[1].name,
                teamIdB: dataMatch[1].id,
                imageTeamPathB: __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* TEAM_IMAGE_PATH */][dataMatch[1].name],
                forecastB: ""
            };
        }
        return null;
    };
    DataParser.prototype.buildSaltKey = function (limitDate, journeyId, groupId) {
        var salt = limitDate.split('/'), total = parseInt(salt[1]) * parseInt(salt[0]) * parseInt(salt[2]), finalParam = total.toString() + 'NQX13A' + (parseInt(salt[0]) * journeyId) + '@C' + salt[0] + 'A' + (parseInt(salt[2]) * groupId * parseInt(salt[1])) +
            'FCFE' + (parseInt(salt[2]) * 3) + 'HKV#' + String(total).split('').reverse().join('') +
            'EPW' + salt[1] + 'B%L';
        return finalParam;
    };
    DataParser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataParser);
    return DataParser;
}());

//# sourceMappingURL=dataParser.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_data_register_data__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmation_confirmation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Storage } from '@ionic/storage';





/*
  Generated class for the login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, 
        //public storage: Storage,
        http, loadingCtrl, alertCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad loginPage');
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        if (this.txtEmail && this.txtPassword) {
            var bodyDatta = 'InputPass1=' + this.txtPassword + '&InputEmail1=' + this.txtEmail, loadBox_1 = this.loadingCtrl.create({
                content: 'Conectando...'
            });
            loadBox_1.present();
            this.http.post(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* END_POINT_SANDBOX */] + 'login-native', bodyDatta, __WEBPACK_IMPORTED_MODULE_7__services_constants__["e" /* HEADERS_OPTIONS */])
                .timeout(10000)
                .subscribe(function (data) {
                loadBox_1.dismiss();
                console.log("Log In without FB successful");
                console.log("TOKEN##############");
                console.log(data.token);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { currentUser: { token: data.token, name: data.name, flagFB: false, balance: 0 } });
            }, function (errorLOG) {
                loadBox_1.dismiss();
                var errorMesage = "", errorTitle = "";
                if (errorLOG instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                    errorMesage = errorLOG.error;
                    errorTitle = "Error";
                }
                else {
                    errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                    errorTitle = "Servicio no disponible";
                }
                _this.alertCtrl.create({
                    title: errorTitle,
                    message: errorMesage,
                    buttons: ['Aceptar']
                }).present();
            });
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                message: 'El usuario y/o contraseña no pueden estar vacíos',
                buttons: ['Aceptar']
            }).present();
        }
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_data_register_data__["a" /* RegisterDataPage */]);
        console.log("test");
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        console.log("test");
        var permission = new Array();
        permission = ["public_profile"];
        this.fb.login(permission)
            .then(function (responseFB) {
            var userId = responseFB.authResponse.userID, params = new Array();
            _this.fb.api("/me?fields=gender,email,first_name,last_name,age_range,birthday,currency,hometown,link,location", params)
                .then(function (userFB) {
                userFB.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                var bodyDatta = 'name=' + userFB.first_name + '&mail=' + userFB.email + '&last_name=' + userFB.last_name + '&id=' + userFB.id + '&gender=' + __WEBPACK_IMPORTED_MODULE_7__services_constants__["b" /* GENDER */][userFB.gender], loadBox = _this.loadingCtrl.create({
                    content: 'Conectando...'
                });
                loadBox.present();
                _this.http.post(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* END_POINT_SANDBOX */] + 'login-fb-native', bodyDatta, __WEBPACK_IMPORTED_MODULE_7__services_constants__["e" /* HEADERS_OPTIONS */])
                    .timeout(10000)
                    .subscribe(function (data) {
                    var response = data;
                    loadBox.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { currentUser: { token: response.token, name: response.name, flagFB: true, balance: 0 } });
                }, function (error) {
                    loadBox.dismiss();
                    var errorMesage = "", errorTitle = "";
                    if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                        errorMesage = error.error;
                        errorTitle = "Error";
                    }
                    else {
                        errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                        errorTitle = "Servicio no disponible";
                    }
                    _this.alertCtrl.create({
                        title: errorTitle,
                        message: errorMesage,
                        buttons: ['Aceptar']
                    }).present();
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
        }, function (error) {
            console.log("Error in login permission: " + error);
        });
    };
    LoginPage.prototype.recoveryPassword = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__confirmation_confirmation__["a" /* ConfirmationModal */], { type: 'Modal' }).present();
        console.log("test");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/login/login.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding class="back-image">\n  <br />\n  <div text-center>\n    <img style="height:50%; width:50%;"  src="assets/imgs/logojq.png" />\n  </div>\n\n  <br />\n  <ion-list>\n    <ion-list-header text-center>\n      <br />\n      <h3><strong> Inicio de Sesión</strong></h3>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name="contact" item-left></ion-icon>\n      <ion-input type="email" placeholder="Usuario o e-mail" [(ngModel)]="txtEmail" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="lock" item-left></ion-icon>\n      <ion-input type="password" placeholder="Contraseña" [(ngModel)]="txtPassword" ></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <br />\n  <p>\n    <button class="button_transparent" ion-button block icon-left (click)="logIn()" >\n      <ion-icon name="arrow-forward" ></ion-icon>\n      Ingresar\n    </button>\n  </p>\n\n  <p>\n    <button class="button_transparent" ion-button block icon-left (click)="createAccount()" >\n      <ion-icon name="contact" ></ion-icon>\n      Registrarme\n    </button>\n  </p>\n\n  <p>\n    <button class="button_transparent" ion-button block icon-left (click)="loginFacebook()" color="facebookColor"  >\n      <ion-icon name="logo-facebook" ></ion-icon>\n      Inicia con Facebook\n    </button>\n  </p>\n\n  <div text-center>\n    <a (click)="recoveryPassword()" >Recuperar contraseña </a>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the confirmation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ConfirmationModal = /** @class */ (function () {
    function ConfirmationModal(navCtrl, navParams, viewCtrl, loadingCtrl, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.type = this.navParams.get("type") || "";
        this.currentEmail = this.navParams.get("email") || "";
        this.token = this.navParams.get("token") || "";
    }
    ConfirmationModal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad confirmationPage');
    };
    ConfirmationModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmationModal.prototype.recoveryPassword = function () {
        var _this = this;
        if (this.txtEmail) {
            var bodyDatta = 'mail=' + this.currentEmail, loadBox_1 = this.loadingCtrl.create({
                content: 'Conectando...'
            });
            loadBox_1.present();
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + 'recover-native', bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
                .timeout(10000)
                .subscribe(function (data) {
                console.log(data);
                loadBox_1.dismiss();
                _this.alertCtrl.create({
                    title: 'Éxito',
                    message: 'Hemos enviado una contraseña temporal a su correo electrónico para que pueda ingresar al sistema.',
                    buttons: ['Aceptar']
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }, function (error) {
                loadBox_1.dismiss();
                var errorMesage = "", errorTitle = "";
                if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                    errorMesage = error.error;
                    errorTitle = "Error";
                }
                else {
                    errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                    errorTitle = "Servicio no disponible";
                }
                _this.alertCtrl.create({
                    title: errorTitle,
                    message: errorMesage,
                    buttons: ['Aceptar']
                }).present();
            });
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                subTitle: 'El email no puede estar vacío',
                buttons: ["Aceptar"]
            }).present();
        }
        this.viewCtrl.dismiss();
    };
    ConfirmationModal.prototype.saveContinue = function () {
        var _this = this;
        if (this.txtConfirmationCode && this.currentEmail) {
            var bodyDatta = 'mail=' + this.currentEmail
                + '&code=' + this.txtConfirmationCode, loadBox_2 = this.loadingCtrl.create({
                content: 'Conectando...'
            });
            loadBox_2.present();
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + 'validate-native', bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
                .timeout(10000)
                .subscribe(function (data) {
                console.log(data);
                loadBox_2.dismiss();
                _this.alertCtrl.create({
                    title: 'Éxito',
                    message: 'El código de confirmación fue recibido con éxito',
                    buttons: ['Aceptar']
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }, function (error) {
                loadBox_2.dismiss();
                var errorMesage = "", errorTitle = "";
                if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                    errorMesage = error.error;
                    errorTitle = "Error";
                }
                else {
                    errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                    errorTitle = "Servicio no disponible";
                }
                _this.alertCtrl.create({
                    title: errorTitle,
                    message: errorMesage,
                    buttons: ['Aceptar']
                }).present();
            });
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                subTitle: 'El código de confirmación no puede estar vacío',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    ConfirmationModal.prototype.modifyPassword = function () {
        var _this = this;
        if (this.txtNewPassword
            && this.txtConfirmationPassword
            && this.txtOldPassword
            && this.txtEmail) {
            if (this.txtNewPassword == this.txtConfirmationPassword) {
                var bodyDatta = 'token=' + this.token
                    + '&pwd=' + this.txtOldPassword
                    + '&mail=' + this.txtEmail
                    + '&newPwd=' + this.txtNewPassword, loadBox_3 = this.loadingCtrl.create({
                    content: 'Conectando...'
                });
                console.log("token", this.token);
                loadBox_3.present();
                this.http.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* END_POINT_SANDBOX */] + 'update-pwd', bodyDatta, __WEBPACK_IMPORTED_MODULE_4__services_constants__["e" /* HEADERS_OPTIONS */])
                    .timeout(10000)
                    .subscribe(function (data) {
                    console.log(data);
                    loadBox_3.dismiss();
                    _this.alertCtrl.create({
                        title: 'Éxito',
                        message: 'La contraseña ha sido cambiada de manera exitosa.',
                        buttons: ['Aceptar']
                    }).present();
                    _this.viewCtrl.dismiss();
                }, function (error) {
                    loadBox_3.dismiss();
                    var errorMesage = "", errorTitle = "";
                    if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                        errorMesage = error.error;
                        errorTitle = "Error";
                    }
                    else {
                        errorMesage = "El servidor no responde en estos momentos, intente mas tarde.";
                        errorTitle = "Servicio no disponible";
                    }
                    _this.alertCtrl.create({
                        title: errorTitle,
                        message: errorMesage,
                        buttons: ['Aceptar']
                    }).present();
                });
            }
            else {
                this.alertCtrl.create({
                    title: 'Validar',
                    subTitle: 'Las contraseñas deben de coincidir.',
                    buttons: ["Aceptar"]
                }).present();
            }
        }
        else {
            this.alertCtrl.create({
                title: 'Validar',
                subTitle: 'Ningún campo puede ir vacío.',
                buttons: ["Aceptar"]
            }).present();
        }
    };
    ConfirmationModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmation',template:/*ion-inline-start:"/Users/user/Downloads/git/quiniela-ios/src/pages/confirmation/confirmation.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title *ngIf="type == \'Page\'">Confirmación</ion-title>\n    <ion-title *ngIf="type == \'Modal\'">Recuperar contraseña</ion-title>\n    <ion-title *ngIf="type == \'Modal_MC\'">Modificar contraseña</ion-title>\n\n    <ion-buttons start *ngIf="type == \'Modal\' || type == \'Modal_MC\'">\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back-image" >\n  <ion-card>\n    <br />\n\n    <ion-card-content>\n\n      <ion-card-title *ngIf="type == \'Modal\'">\n        <div text-center ><strong text-center>Recuperar contraseña </strong></div>\n      </ion-card-title>\n\n      <ion-card-title *ngIf="type == \'Modal_MC\'">\n        <div text-center ><strong text-center>Modificar contraseña </strong></div>\n      </ion-card-title>\n\n      <ion-card-title *ngIf="type == \'Page\'">\n        <div text-center ><strong text-center>Confirmación</strong></div>\n      </ion-card-title>\n\n      <ion-list >\n\n        <ion-item *ngIf="type == \'Modal\' || type == \'Modal_MC\'">\n          <ion-icon name="at" item-left></ion-icon>\n          <ion-input type="email" [(ngModel)]="txtEmail" placeholder="e-m@il" ></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="type == \'Page\'">\n          <ion-icon name="key" item-left></ion-icon>\n          <ion-input type="text" [(ngModel)]="txtConfirmationCode" placeholder="Codigo de confirmación" ></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="type == \'Modal_MC\'" >\n          <ion-icon name="lock" item-left></ion-icon>\n          <ion-input type="password" placeholder="Contraseña anterior" [(ngModel)]="txtOldPassword" ></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="type == \'Modal_MC\'" >\n          <ion-icon name="lock" item-left></ion-icon>\n          <ion-input type="password" placeholder="Nueva contraseña" [(ngModel)]="txtNewPassword" ></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="type == \'Modal_MC\'" >\n          <ion-icon name="lock" item-left></ion-icon>\n          <ion-input type="password" placeholder="Confirmar nueva contraseña" [(ngModel)]="txtConfirmationPassword" ></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n\n    <div text-center *ngIf="type == \'Page\'">\n      <button class="button-card" ion-button color="primary" full icon-right (click)="saveContinue()">\n        Confirmar\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n    </div>\n\n    <div text-center *ngIf="type == \'Modal\'">\n      <button class="button-card" ion-button color="primary" full icon-right (click)="recoveryPassword()">\n        Recuperar contraseña\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n    </div>\n\n    <div text-center *ngIf="type == \'Modal_MC\'">\n      <button class="button-card" ion-button color="primary" full icon-right (click)="modifyPassword()">\n        Modificar contraseña\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n    </div>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/user/Downloads/git/quiniela-ios/src/pages/confirmation/confirmation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfirmationModal);
    return ConfirmationModal;
}());

//# sourceMappingURL=confirmation.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map