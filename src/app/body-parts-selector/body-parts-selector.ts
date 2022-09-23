import { Component } from "@angular/core";

@Component({
  selector: "app-body-parts-selector",
  templateUrl: "./body-parts-selector.component.html",
  styleUrls: ["./body-parts-selector.component.css"]
})
export class BodyPartsSelector {
  share() {
    window.alert("The product has been shared!");
  }
}
