import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SubirPage } from '../subir/subir';

//servicios o providers
import { CargaArchivosService } from '../../providers/carga-archivos/carga-archivos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modalCtrl: ModalController, private _cas: CargaArchivosService) {
      this._cas.cargar_imagenes();
  }

  cargar_siguientes(infiniteScroll: any){
    console.log('sgtes');
    this._cas.cargar_imagenes().then(
      () => {
        infiniteScroll.complete();
      }
    );
  }


  mostrar_modal(){
    let modal = this.modalCtrl.create( SubirPage );
    modal.present();
  }
}
