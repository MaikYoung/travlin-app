import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class LoadingComponent {
  translations:any;
  constructor(
    public loadingCtrl: LoadingController,
    private translate: TranslateService,
  ) {
    this.translate.get(["loading"]).subscribe(values => this.translations = values)
    const loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: this.translations['loading'],
    });
    loading.present();
  }

}
