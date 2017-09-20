import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SubirPage } from '../subir/subir';

// angular firebase stuff
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  links: FirebaseListObservable<any[]>;
  constructor(private modalCtrl: ModalController, private af: AngularFireDatabase) {
    this.links = af.list('/links');
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create( SubirPage );
    modal.present();
  }
}
