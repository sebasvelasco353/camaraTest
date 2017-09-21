import { Component } from '@angular/core';
import { ViewController, ToastController, Platform } from 'ionic-angular';

//plugins
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';


@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  imgPreview: string = undefined;
  img: string = null;

  constructor(private viewCtrl: ViewController, private camera: Camera, private ToastCtlr: ToastController,
    private platform: Platform, private imagePicker: ImagePicker) {

  }

  cerrar_modal() {
    this.viewCtrl.dismiss();
  }

  mostrar_camara() {
    if (!this.platform.is("cordova")) {
      this.mostrar_toast("Error, no estas desde un dispositivo movil");
      return;
    }
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgPreview = 'data:image/jpeg;base64,' + imageData;
      this.img = imageData;
    }, (err) => {
      // Handle error
      this.mostrar_toast(err);
      console.log(err);
    });
  }

  seleccionar_imagenes() {
    if (!this.platform.is("cordova")) {
      this.mostrar_toast("Error, no estas desde un dispositivo movil");
      return;
    }

    let opciones: ImagePickerOptions = {
      maximumImagesCount: 1,
      quality: 40,
      outputType: 1
    }

    this.imagePicker.getPictures(opciones).then((results) => {

      for (let img of results) {
        this.imgPreview = 'data:image/jpeg;base64,' + img;
        this.img = img;
        break;
      }
    }, (err) => {
      this.mostrar_toast('Error seleccion: ' + err);
    });

  }

  private mostrar_toast(texto: string) {
    this.ToastCtlr.create({
      message: texto,
      duration: 2500
    }).present();
  }

}
