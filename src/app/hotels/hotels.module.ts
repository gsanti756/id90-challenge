import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AgmCoreModule } from "@agm/core";

import { AppStoreModule } from "../store/store.module";
import { HotelsRoutingModule } from "./hotels-routing.module";
import { HotelsComponent } from "./containers/hotels/hotels.component";
import { HotelsListComponent } from "./components/hotels-list/hotels-list.component";
import { MapsComponent } from "./components/maps/maps.component";
import { FiltersComponent } from "./components/filters/filters.component";

@NgModule({
  declarations: [
    HotelsComponent,
    HotelsListComponent,
    MapsComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppStoreModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCE8Ld3VmnQQsuyoK_baQKS-h16AhkMYEk"
    })
  ]
})
export class HotelsModule {}
