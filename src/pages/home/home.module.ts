import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
    declarations: [HomePage],
    exports: [HomePage],
    imports: [
        IonicPageModule.forChild(HomePage),
        TranslateModule,
        ComponentsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }