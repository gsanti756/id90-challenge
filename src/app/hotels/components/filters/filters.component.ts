import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { formatDate } from "@angular/common";
import { addDays } from "date-fns";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
  submitted: boolean;

  @Input() loading: boolean;
  @Output() FiltersSubmit = new EventEmitter<FilterHotels>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.showFilters = true;
    this.filterForm = this.formBuilder.group({
      destination: ["", [Validators.compose([Validators.required])]],
      checkin: [formatDate(new Date(), "yyyy-MM-dd", "en")],
      checkout: [formatDate(addDays(new Date(), 7), "yyyy-MM-dd", "en")],
      guests: [1, [Validators.compose([Validators.required])]]
    });
  }

  get f() {
    return this.filterForm.controls;
  }

  showFilter(): void {
    this.showFilters = !this.showFilters;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.filterForm.invalid) {
      return;
    }

    const { destination, checkin, checkout, guests } = this.filterForm.value;
    this.FiltersSubmit.emit({ destination, checkin, checkout, guests });
  }
}
