import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "fez-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class FezButtonComponent implements OnInit {
  @Input()
  public disabled: boolean = false;
  @Input()
  public loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
