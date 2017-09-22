webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargaArchivosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CargaArchivosService = (function () {
    function CargaArchivosService(af, toastCtrl) {
        this.af = af;
        this.toastCtrl = toastCtrl;
        this.CARPETA_IMAGENES = 'img';
        this.LINKS = 'links';
        this.imagenes = [];
        this.lastKey = undefined;
    }
    CargaArchivosService.prototype.cargar_imagenes = function () {
        //TODO: fix error on infiniteScroll, it only loading 7 images in total
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.af.list('/links', {
                query: {
                    limitToLast: 4,
                    orderByKey: true,
                    endAt: _this.lastKey
                }
            }).subscribe(function (links) {
                if (_this.lastKey) {
                    links.pop();
                }
                if (links.length == 0) {
                    console.log("no hay mas");
                    resolve(false);
                    return;
                }
                _this.lastKey = links[0].$key;
                for (var i = links.length - 1; i >= 0; i--) {
                    var link = links[i];
                    _this.imagenes.push(link);
                }
            });
        });
    };
    CargaArchivosService.prototype.cargar_imagenes_firebase = function (archivo) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.mostrar_toast('Iniciando la carga');
            //ref storage
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var nombreArchivo = new Date().valueOf(); //el nombre es la fecha
            var uploadTask = storageRef.child(_this.CARPETA_IMAGENES + "/" + nombreArchivo)
                .putString(archivo.link, 'base64', { contentType: 'image/jpeg' });
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { }, //saber el avance del archivo
            function (error) {
                console.log("Error al subir ", JSON.stringify(error));
                _this.mostrar_toast('error al cargar: ' + JSON.stringify(error));
                reject(error);
            }, //manejo de errores
            function () {
                var url = uploadTask.snapshot.downloadURL;
                _this.mostrar_toast('Imagen cargada con exito');
                _this.crear_link_enBd(url);
                resolve();
            } //termino proceso
            );
        });
        return promesa;
    };
    CargaArchivosService.prototype.crear_link_enBd = function (url) {
        var link = {
            link: url,
            tag1: 'tag',
            tag2: 'tag',
            tag3: 'tag'
        };
        var $key = this.af.list("/" + this.LINKS).push(link).key;
        link.$key = $key;
        this.imagenes.push(link);
    };
    CargaArchivosService.prototype.mostrar_toast = function (texto) {
        this.toastCtrl.create({
            message: texto,
            duration: 2500
        }).present();
    };
    return CargaArchivosService;
}());
CargaArchivosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _b || Object])
], CargaArchivosService);

var _a, _b;
//# sourceMappingURL=carga-archivos.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subir_subir__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_carga_archivos_carga_archivos__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//servicios o providers

var HomePage = (function () {
    function HomePage(modalCtrl, _cas) {
        this.modalCtrl = modalCtrl;
        this._cas = _cas;
        this._cas.cargar_imagenes();
    }
    HomePage.prototype.cargar_siguientes = function (infiniteScroll) {
        console.log('sgtes');
        this._cas.cargar_imagenes().then(function () {
            infiniteScroll.complete();
        });
    };
    HomePage.prototype.mostrar_modal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__subir_subir__["a" /* SubirPage */]);
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/sebastian_v/Documents/universidad/2017-2/pdg2/camaraTest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Kuanji\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let link of _cas.imagenes">\n    <img [src]="link.link" alt="">\n    <ion-card-content>\n      <ion-card-title>\n        {{ link.tag1 }}\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="mostrar_modal()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)="cargar_siguientes($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/sebastian_v/Documents/universidad/2017-2/pdg2/camaraTest/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_carga_archivos_carga_archivos__["a" /* CargaArchivosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_carga_archivos_carga_archivos__["a" /* CargaArchivosService */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_carga_archivos_carga_archivos__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//plugins


//servicios / providers

var SubirPage = (function () {
    function SubirPage(viewCtrl, camera, ToastCtlr, platform, imagePicker, _cas, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.ToastCtlr = ToastCtlr;
        this.platform = platform;
        this.imagePicker = imagePicker;
        this._cas = _cas;
        this.loadingCtrl = loadingCtrl;
        this.imgPreview = undefined;
        this.img = "";
    }
    SubirPage.prototype.crear_link = function () {
        var _this = this;
        console.log("subiendo");
        var archivo = {
            'link': this.img,
            'tag1': 'lala',
            'tag3': 'lala',
            'tag2': 'lala'
        };
        var loader = this.loadingCtrl.create({
            content: "Subiendo"
        });
        loader.present();
        this._cas.cargar_imagenes_firebase(archivo).then(function () {
            loader.dismiss();
            _this.cerrar_modal();
        }, //cuando termine de subir
        function (error) {
            loader.dismiss();
            _this.mostrar_toast("Error al cargar: " + error);
        });
    };
    SubirPage.prototype.cerrar_modal = function () {
        this.viewCtrl.dismiss();
    };
    SubirPage.prototype.mostrar_camara = function () {
        var _this = this;
        if (!this.platform.is("cordova")) {
            this.mostrar_toast("Error, no estas desde un dispositivo movil");
            return;
        }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imgPreview = 'data:image/jpeg;base64,' + imageData;
            _this.img = imageData;
        }, function (err) {
            // Handle error
            _this.mostrar_toast(err);
            console.log(err);
        });
    };
    SubirPage.prototype.seleccionar_imagenes = function () {
        var _this = this;
        if (!this.platform.is("cordova")) {
            this.mostrar_toast("Error, no estas desde un dispositivo movil");
            return;
        }
        var opciones = {
            maximumImagesCount: 1,
            quality: 40,
            outputType: 1
        };
        this.imagePicker.getPictures(opciones).then(function (results) {
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var img = results_1[_i];
                _this.imgPreview = 'data:image/jpeg;base64,' + img;
                _this.img = img;
                break;
            }
        }, function (err) {
            _this.mostrar_toast('Error seleccion: ' + err);
        });
    };
    SubirPage.prototype.mostrar_toast = function (texto) {
        this.ToastCtlr.create({
            message: texto,
            duration: 2500
        }).present();
    };
    return SubirPage;
}());
SubirPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subir',template:/*ion-inline-start:"/home/sebastian_v/Documents/universidad/2017-2/pdg2/camaraTest/src/pages/subir/subir.html"*/'<!--\n  Generated template for the SubirPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button (click)="cerrar_modal()">Cerrar</button>\n    </ion-buttons>\n    <ion-title>Subir imagen</ion-title>\n\n    <ion-buttons end>\n      <button ion-button [disabled]="img.length < 2 " (click)="crear_link()">\n        Agregar a la BD\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngIf="imgPreview">\n      <img [src]="imgPreview" alt="">\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block icon-left (click)="seleccionar_imagenes()"><ion-icon name="photos">Seleccionar</ion-icon></button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block icon-left (click)="mostrar_camara()"><ion-icon name="camera">Camara</ion-icon></button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/sebastian_v/Documents/universidad/2017-2/pdg2/camaraTest/src/pages/subir/subir.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_4__providers_carga_archivos_carga_archivos__["a" /* CargaArchivosService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], SubirPage);

//# sourceMappingURL=subir.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(315);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_subir_subir__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_firebase_config__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_image_picker__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_carga_archivos_carga_archivos__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Angular and firebase



//import the database and stuff config

// plugins


//Servicios / providers

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_subir_subir__["a" /* SubirPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__config_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_subir_subir__["a" /* SubirPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_14__providers_carga_archivos_carga_archivos__["a" /* CargaArchivosService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/sebastian_v/Documents/universidad/2017-2/pdg2/camaraTest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sebastian_v/Documents/universidad/2017-2/pdg2/camaraTest/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyCl-ceZlM_sLI4hQShmPq6l6w0ZdFsCVOw",
    authDomain: "kuanji-64c62.firebaseapp.com",
    databaseURL: "https://kuanji-64c62.firebaseio.com",
    projectId: "kuanji-64c62",
    storageBucket: "kuanji-64c62.appspot.com",
    messagingSenderId: "79252411694"
};
//# sourceMappingURL=firebase.config.js.map

/***/ })

},[298]);
//# sourceMappingURL=main.js.map