import { Component, OnInit } from "@angular/core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  faFilter = faFilter;
  showFilters: boolean;

  constructor() {}

  ngOnInit() {}

  showFilter(): void {
    this.showFilters = !this.showFilters;
  }
}
