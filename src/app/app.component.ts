import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { DiagnosticoCamaraPage } from '../pages/diagnostico-camara/diagnostico-camara';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Icon } from 'ionic-angular/components/icon/icon';
import { ResultadosPage } from '../pages/resultados/resultados';
import { InformacionPage } from '../pages/informacion/informacion';
import { AyudaPage } from '../pages/ayuda/ayuda';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  //pages: ListPage[];
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: "Bienvenido a SeeEyes", component: HelloIonicPage },
      { title: 'Realizar Diagnostico', component: DiagnosticoCamaraPage },
      { title: 'Resultados', component: ResultadosPage  },
      { title: 'Informacion', component: InformacionPage  },
      { title: 'Ayuda', component: AyudaPage },
    ];
  }

 
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}


