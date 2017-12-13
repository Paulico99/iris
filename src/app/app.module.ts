import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoadingController } from 'ionic-angular';

import { DiagnosticoCamaraPage } from '../pages/diagnostico-camara/diagnostico-camara';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { InformacionPage } from '../pages/informacion/informacion';
import { ResultadosPage } from '../pages/resultados/resultados';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    DiagnosticoCamaraPage,
    AyudaPage,
    InformacionPage,
    ResultadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    DiagnosticoCamaraPage,
    AyudaPage,
    InformacionPage,
    ResultadosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    LoadingController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
