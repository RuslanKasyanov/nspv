import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [NgbAccordionConfig],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
  }

}
