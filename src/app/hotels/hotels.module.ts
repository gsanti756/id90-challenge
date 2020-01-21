import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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
  imports: [CommonModule, HotelsRoutingModule, FontAwesomeModule]
})
export class HotelsModule {}
