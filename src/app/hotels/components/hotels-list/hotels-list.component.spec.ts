import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from "@angular/core/testing";

import { HotelsListComponent } from "./hotels-list.component";
import { By } from "@angular/platform-browser";
import { element } from "protractor";

describe("HotelsListComponent", () => {
  let component: HotelsListComponent;
  let fixture: ComponentFixture<HotelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("not show spinner", () => {
    const mock = fixture.debugElement.query(By.css(".spinner-border"));
    expect(mock).toBeNull();
  });

  it("show spinner", fakeAsync(() => {
    component.loadingNextPage = true;
    tick(500);
    const mock = fixture.debugElement.query(By.css(".spinner-border"));
    expect(mock).toBeDefined();
  }));
});
