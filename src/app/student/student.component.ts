import { Component, OnInit, Input } from "@angular/core";
import { Student } from "./student.model";
@Component({
  selector: "sr-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  //property Binding
  @Input()
  student: Student;

  constructor() {}

  ngOnInit() {}
}
