import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "../store/interceptor.service";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers, metaReducers } from "./index";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { environment } from "src/environments/environment";

import { AuthEffects } from "./auth/effects/auth.effects";
import { HotelsEffects } from "./hotels/effects/hotels.effects";

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
  EffectsModule.forRoot([AuthEffects, HotelsEffects]),
  StoreDevtoolsModule.instrument({
    name: "id90Challenge",
    logOnly: environment.production,
    maxAge: 25
  })
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ...NGRX_IMPORTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppStoreModule {}
