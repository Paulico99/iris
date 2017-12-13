import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { DiagnosticoCamaraPage } from '../../pages/diagnostico-camara/diagnostico-camara';
import { AyudaPage } from '../../pages/ayuda/ayuda';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {}

  
  diagnostico() {
    this.navCtrl.push(DiagnosticoCamaraPage);
  }

  ayuda() {
    this.navCtrl.push(AyudaPage);
  }
/*
  .config(function($stateProvider, $urlRouterProvider) {
    
        $stateProvider
            .state('diagnostico', {
              url: '',
              templateUrl: 'templates/diagnostico-camara.html',
              controller: 'diagnostico'
            })
            $urlRouterProvider.otherwise('');
            
          }
*/
}
