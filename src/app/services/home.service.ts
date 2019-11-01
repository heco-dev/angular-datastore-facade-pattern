import { Injectable } from "@angular/core";
import { FakeHomeControllerService } from "../../fakes/fake-home-controller.service";

@Injectable({
  providedIn: "root"
})
export class FieldRepService {

  readonly API_VERSION = "2.0";

  constructor(
    private readonly fakeHomeControllerSvc: FakeHomeControllerService
  ) {}


}
