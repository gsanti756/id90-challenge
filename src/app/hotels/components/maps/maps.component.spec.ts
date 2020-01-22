import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MapsComponent } from "./maps.component";
import { AgmCoreModule } from "@agm/core";

describe("MapsComponent", () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapsComponent],
      imports: [AgmCoreModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
