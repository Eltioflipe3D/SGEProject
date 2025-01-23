import { Component, OnInit } from '@angular/core';
import * as config from "package.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  yyyy: number;
  name: string
  ver: string
  constructor() { }

  ngOnInit() {
    this.yyyy = new Date().getFullYear();
    this.ver = config.version;
    this.name = config.name;
  }

}
