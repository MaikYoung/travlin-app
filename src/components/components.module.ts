import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { LoadingComponent } from './loading/loading';
@NgModule({
	declarations: [
		LoadingComponent
	],
	imports: [
		IonicPageModule.forChild(LoadingComponent)
	],
	exports: [
		LoadingComponent
	]
})
export class ComponentsModule {}
