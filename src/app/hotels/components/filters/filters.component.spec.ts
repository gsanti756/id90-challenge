import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FiltersComponent } from "./filters.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";

describe("FiltersComponent", () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersComponent, FaIconComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
