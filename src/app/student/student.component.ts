import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sr-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  //property Binding
  name: string = "Sergio";
  isJedi: boolean = true;

  constructor() {}

  ngOnInit() {}
}
