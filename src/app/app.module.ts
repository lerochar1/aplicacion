import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//para login}
import {  SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider,FacebookLoginProvider } from "angularx-social-login";
//firebase
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";


//lo demas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { IheaderComponent } from './inicio/iheader/iheader.component';
import { IbodyComponent } from './inicio/ibody/ibody.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EbodyComponent } from './especialidad/ebody/ebody.component';
import { EheaderComponent } from './especialidad/eheader/eheader.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NheaderComponent } from './nosotros/nheader/nheader.component';
import { NbodyComponent } from './nosotros/nbody/nbody.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CheaderComponent } from './contactanos/cheader/cheader.component';
import { CbodyComponent } from './contactanos/cbody/cbody.component';
import { LheaderComponent } from './login/lheader/lheader.component';
import { LbodyComponent } from './login/lbody/lbody.component';
import { SelecespecialidadComponent } from './selecespecialidad/selecespecialidad.component';
import { SeheaderComponent } from './selecespecialidad/seheader/seheader.component';
import { SebodyComponent } from './selecespecialidad/sebody/sebody.component';
import { SelececdatetimeComponent } from './selececdatetime/selececdatetime.component';
import { SdheaderComponent } from './selececdatetime/sdheader/sdheader.component';
import { SdbodyComponent } from './selececdatetime/sdbody/sdbody.component';
import { PagoComponent } from './pago/pago.component';
import { PheaderComponent } from './pago/pheader/pheader.component';
import { PbodyComponent } from './pago/pbody/pbody.component';
import { BoletaComponent } from './boleta/boleta.component';
import { BheaderComponent } from './boleta/bheader/bheader.component';
import { BbodyComponent } from './boleta/bbody/bbody.component';
import { ReservaPaso1Component } from './reserva-paso1/reserva-paso1.component';
import { ReservaPaso2Component } from './reserva-paso2/reserva-paso2.component';
import { ReservaPaso3Component } from './reserva-paso3/reserva-paso3.component';
import { HeaderReservaComponent } from './header-reserva/header-reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HospitalService } from './shared/hospital.service';
import { ReservaPaso4Component } from './reserva-paso4/reserva-paso4.component';
import { ReservaPaso5Component } from './reserva-paso5/reserva-paso5.component';
import { ReservaPaso6Component } from './reserva-paso6/reserva-paso6.component';
import { AfiliacionComponent } from './afiliacion/afiliacion.component';

// al usar hospitalservice se borra en contenido de las cosas jejee ;D
// import { HospitalService } from './shared/hospital.service';
// import { AuthGuardService } from './services/auth-guard.service';


const config = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider("761309882279-9gdpl7teu3pm55h217hhnpc50bvspahe.apps.googleusercontent.com")
  // }
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider("126510371816-548i3tga1oull84k9jn0eod5bfsjhm09.apps.googleusercontent.com")
  // },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("126510371816-548i3tga1oull84k9jn0eod5bfsjhm09.apps.googleusercontent.com")
  },
  //inicio secion local
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("630989510742058")
  }  
  //para iniciar sesion en el hosting	
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider("2156200141339667")
  // }  	
]);
 export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    // AuthGuardService,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PerfilComponent,
    UsuarioComponent,
    InicioComponent,
    IheaderComponent,
    IbodyComponent,
    EspecialidadComponent,
    EbodyComponent,
    EheaderComponent,
    NosotrosComponent,
    NheaderComponent,
    NbodyComponent,
    ContactanosComponent,
    CheaderComponent,
    CbodyComponent,
    LheaderComponent,
    LbodyComponent,
    SelecespecialidadComponent,
    SeheaderComponent,
    SebodyComponent,
    SelececdatetimeComponent,
    SdheaderComponent,
    SdbodyComponent,
    PagoComponent,
    PheaderComponent,
    PbodyComponent,
    BoletaComponent,
    BheaderComponent,
    BbodyComponent,
    ReservaPaso1Component,
    ReservaPaso2Component,
    ReservaPaso3Component,
    HeaderReservaComponent,
    ReservaPaso4Component,
    ReservaPaso5Component,
    ReservaPaso6Component,
    AfiliacionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     SocialLoginModule,
     FormsModule,
     ReactiveFormsModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
         //  AngularFireModule.initializeapp(environment.firebaseConfig),
     AngularFirestoreModule,
  ],
  providers: [
    {
      // provide: HospitalService,
      // provide: AuthServiceConfig,
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    HospitalService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
