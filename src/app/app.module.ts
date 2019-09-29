import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrNameService } from './datas/mock-datas.service';
import { ToasterService } from './toaster-services/toaster.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

],
  providers: [ToastrNameService,ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
