import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { formatDate } from "@angular/common";
import { addDays } from "date-fns";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FilterHotels } from "src/app/store/hotels/models/hotels";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  filterForm: FormGroup;
  showFilters: boolean;
  faFilter = faFilter;

  @Input() loading: boolean;
  @Output() FiltersSubmit = new EventEmitter<FilterHotels>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.showFilters = true;
    this.filterForm = this.formBuilder.group({
      destination: [""],
      checkin: [formatDate(new Date(), "yyyy-MM-dd", "en")],
      checkout: [formatDate(addDays(new Date(), 7), "yyyy-MM-dd", "en")],
      guests: [1]
    });
  }

  getStartDate(): string {
    return "";
  }

  showFilter(): void {
    this.showFilters = !this.showFilters;
  }

  onSubmit(): void {
    const { destination, checkin, checkout, guests } = this.filterForm.value;
    this.FiltersSubmit.emit({ destination, checkin, checkout, guests });
  }
}
