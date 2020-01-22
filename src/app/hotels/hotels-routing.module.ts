import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ServiceService } from "./service/service.service";

import { HotelsComponent } from "./containers/hotels/hotels.component";
const routes: Routes = [
  {
    path: "hotels",
    component: HotelsComponent,
    canActivate: [ServiceService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule {}
