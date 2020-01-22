import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AgmCoreModule } from "@agm/core";

import { HotelsStoreMock } from "../../../store/hotels/reducers/hotel.mock";
import { AppStoreModule } from "../../../store/store.module";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";
import { HotelsComponent } from "./hotels.component";
import { FiltersComponent } from "../../components/filters/filters.component";
import { HotelsListComponent } from "../../components/hotels-list/hotels-list.component";
import { MapsComponent } from "../../components/maps/maps.component";
import { RouterTestingModule } from "@angular/router/testing";

import { of } from "rxjs";
import { Store } from "@ngrx/store";
describe("HotelsComponent", () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;

  const storeMock = {
    select() {
      return of(HotelsStoreMock);
    }
  };

  const testStore = jasmine.createSpyObj("Store", ["select"]);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelsComponent,
        FiltersComponent,
        HotelsListComponent,
        MapsComponent,
        FaIconComponent
      ],
      imports: [
        ReactiveFormsModule,
        AgmCoreModule.forRoot(),
        AppStoreModule,
        RouterTestingModule
      ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
