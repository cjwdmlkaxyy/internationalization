import { Component, OnInit } from '@angular/core';
import {SildeBarComponent} from '../silde-bar/silde-bar.component';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  realTime: any = new Date();
  // timer: any;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }
  timer = setInterval(() => {
    this.realTime = new Date();
  }, 1000);

  changeLang(lang) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    // window.location.reload();
  }

}
