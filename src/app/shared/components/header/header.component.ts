import { Component, OnInit } from "@angular/core";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  faPhoneAlt = faPhoneAlt;

  constructor() {}

  ngOnInit() {}
}
