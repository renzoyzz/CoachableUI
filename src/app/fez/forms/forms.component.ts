import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fez-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public model = {
    firstName: ''
  };

  constructor() {}

  ngOnInit() {}
}
