import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContactComponent } from './Components/contact/contact.component';
import { FaresComponent } from './Components/fares/fares.component';
import { LanguageComponent } from './Components/language/language.component';
import { RoutesComponent } from './Components/routes/routes.component';
import { ShedulesComponent } from './Components/shedules/shedules.component';
import { SlidesComponent } from './Components/slides/slides.component';

import { YagaModule} from '@yaga/leaflet-ng2';
import { IonicStorageModule } from '@ionic/storage';
import { MainService } from 'src/assets/Services/main.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, ContactComponent, FaresComponent, LanguageComponent, RoutesComponent, ShedulesComponent, SlidesComponent],
  entryComponents: [ContactComponent, FaresComponent, LanguageComponent, RoutesComponent, ShedulesComponent, SlidesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, YagaModule, HttpClientModule],
  providers: [
    MainService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
