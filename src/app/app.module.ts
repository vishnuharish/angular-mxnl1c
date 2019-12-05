import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatSelectModule} from '@angular/material/select';
import {OverlayConfig} from '@angular/cdk/overlay';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test.component';
export class DefaultOverlayConfig extends OverlayConfig{
  constructor(){
    super();
    this.disposeOnNavigation = true;
  }
}

const routes: Routes = [
  {path: "", component: HelloComponent},
  {path: "test", component: TestComponent}
]
@NgModule({
  imports:[ BrowserModule, FormsModule, BrowserAnimationsModule, MatSelectModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent,TestComponent  ],
  bootstrap:    [ AppComponent ],
  providers: [
    {provide: OverlayConfig, useClass: DefaultOverlayConfig}
  ]
})
export class AppModule { }
