import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RegisterDataPage } from '../pages/register_data/register_data';
import { ConfirmationModal } from '../pages/confirmation/confirmation';
import { TermsNConditionsPage } from '../pages/terms_n_conditions/terms_n_conditions';
import { ScorePage } from '../pages/score/score';
import { menuPopover } from '../pages/pop_menu/pop_menu';
import { PositionTablePage } from '../pages/position_table/position_table';
import { DataParser } from '../services/dataParser';
import { GroupsPage } from '../pages/groups/groups';
import { NewChampionshipPage } from '../pages/new_championship/new_championship';
import { NewGroupPage } from '../pages/new_group/new_group';
import { QuinielaPage } from '../pages/quinielas/quinielas';
import { DetailJourneyPage } from '../pages/detail_journey/detail_journey';
import { DetailForecastPage } from '../pages/detail_forecast/detail_forecast';
import { Facebook } from '@ionic-native/facebook';
import { Utils } from '../services/utils';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    RegisterDataPage,
    ConfirmationModal,
    TermsNConditionsPage,
    ScorePage,
    menuPopover,
    PositionTablePage,
    GroupsPage,
    NewChampionshipPage,
    NewGroupPage,
    QuinielaPage,
    DetailJourneyPage,
    DetailForecastPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    RegisterDataPage,
    ConfirmationModal,
    TermsNConditionsPage,
    ScorePage,
    menuPopover,
    PositionTablePage,
    GroupsPage,
    NewChampionshipPage,
    NewGroupPage,
    QuinielaPage,
    DetailJourneyPage,
    DetailForecastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataParser,
    Facebook,
    Utils,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
