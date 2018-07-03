import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { LoadingComponent } from './loading/loading';
import { TabsComponent } from './tabs/tabs';
@NgModule({
	declarations: [
		LoadingComponent,
    	TabsComponent
	],
	imports: [
		IonicPageModule.forChild(LoadingComponent),
		IonicPageModule.forChild(TabsComponent)
	],
	exports: [
		LoadingComponent,
    	TabsComponent
	]
})
export class ComponentsModule {}
