import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { InformacionPage } from '../../pages/informacion/informacion';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the DiagnosticoCamaraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diagnostico-camara',
  templateUrl: 'diagnostico-camara.html',
})
export class DiagnosticoCamaraPage {
  image : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camara: Camera,public loadingCtrl: LoadingController) {
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cerrando Camara...",
      duration: 3000
    });
    loader.present();
  }

  getPicture(): void {
    this.camara
      .getPicture({
        quality: 95,
        destinationType: this.camara.DestinationType.DATA_URL,
        sourceType: this.camara.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: this.camara.EncodingType.PNG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: true
      })
      .then(
        imageData => {
          this.image = imageData;
        },
        error => {
          console.log('ERROR -> ' + JSON.stringify(error));
        }
      );
  }

  informacion() {
    this.navCtrl.push(InformacionPage);
  }
  // getPicture(){
  //   let options: CameraOptions = {
  //     destinationType: this.camara.DestinationType.DATA_URL,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     quality: 100
  //   }
  //   this.camara.getPicture( options )
  //   .then(imageData => {
  //     this.image = `data:image/jpeg;base64,${imageData}`;
  //   })
  //   .catch(error =>{
  //     console.error( error );
  //   });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticoCamaraPage');
  }

}
