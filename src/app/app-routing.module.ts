import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { PageNotFoundComponent } from "./shared/containers/page-not-found/page-not-found.component";

import { ServiceService } from "./services/service.service";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [ServiceService]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
