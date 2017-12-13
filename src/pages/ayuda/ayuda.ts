import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';

/**
 * Generated class for the AyudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ayuda',
  templateUrl: 'ayuda.html',
})
export class AyudaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  principal() {
    this.navCtrl.push(HelloIonicPage);
  }
  slides = [
    {
      title: "Bienvenido a See Eyes tutorial!",
      description: "La App <b> See Eyes</b> permitirá a los medicos y usuarios saber que tipo de enfermedad puede padecer a travez de un analisis de su iris.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "Que es See Eyes?",
      description: "<b>See Eyes</b> En la App te permitirá realizar un diagnostico de tu iris de una manera muy sencilla, se tomará una foto a su ojo y se analizará si padece algun problema o enfermedad y de inmediato se le devolverá un resultado.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "Como usarlo?",
      description: "En la app <b>See Eyes</b> te vas a dirigir a la pagina principal o menu y pulsarás el boton DIAGNOSTICAR después en otra pantalla dara click al boton TOMAR FOTO y de esta manera empezarás a realizar tu diagnostico a tu ojo.",
      image: "assets/imgs/ojo2.png",
    }
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad AyudaPage');
  }

}
