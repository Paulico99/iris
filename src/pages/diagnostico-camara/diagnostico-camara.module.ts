import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagnosticoCamaraPage } from '../diagnostico-camara/diagnostico-camara'; 

@NgModule({
  declarations: [
    DiagnosticoCamaraPage,
  ],
  imports: [
    IonicPageModule.forChild(DiagnosticoCamaraPage),
  ],
})
export class DiagnosticoCamaraPageModule {
   

   constructor(){}
  
}
