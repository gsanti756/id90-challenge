import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HotelsComponent } from "./containers/hotels/hotels.component";
const routes: Routes = [
  {
    path: "hotels",
    component: HotelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule {}
