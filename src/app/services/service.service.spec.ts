import { TestBed } from "@angular/core/testing";

import { ServiceService } from "./service.service";
import { AppStoreModule } from "../store/store.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("ServiceService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppStoreModule, RouterTestingModule]
    })
  );

  it("should be created", () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  });
});
