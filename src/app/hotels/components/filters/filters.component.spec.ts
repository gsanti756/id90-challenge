import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { FiltersComponent } from "./filters.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

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

  it("filters button text hide", () => {
    expect(component.showFilters).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css("button")).nativeElement.innerText
    ).toContain("Hide Filters");
  });

  it("filters button text false", fakeAsync(() => {
    fixture.componentInstance.showFilter();
    expect(fixture.componentInstance.showFilters).toBeFalsy();
    tick(500);
    expect(
      fixture.debugElement.query(By.css("button")).nativeElement.innerText
    ).toContain("Hide Filters");
  }));
});
