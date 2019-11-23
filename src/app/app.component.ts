import { Component } from "@angular/core";

@Component({
  selector: "sr-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  Nick = { name: "Nick", IsJedi: false, template: "Bass" };
  Mark = { name: "Mark", IsJedi: false };
  Mary = { name: "Mary", IsJedi: true, template: "Guitar" };
}
