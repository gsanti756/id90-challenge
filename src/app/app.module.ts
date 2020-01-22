import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// Modules
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { AuthModule } from "./auth/auth.module";

import { HotelsRoutingModule } from "./hotels/hotels-routing.module";
import { HotelsModule } from "./hotels/hotels.module";

import { HeaderComponent } from "./shared/components/header/header.component";

// Containers
import { PageNotFoundComponent } from "./shared/containers/page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AuthModule,
    HotelsModule,
    AppRoutingModule,
    AuthRoutingModule,
    HotelsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
