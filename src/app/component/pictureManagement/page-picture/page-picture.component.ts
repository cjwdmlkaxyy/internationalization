import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import {Observable} from 'rxjs';
import * as fromEvent from 'rxjs/add/observable/fromEvent';
import {DomSanitizer} from '@angular/platform-browser';
import * as $ from 'jquery';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-page-picture',
  templateUrl: './page-picture.component.html',
  styleUrls: ['../slideshow/slideshow.component.scss']
})
export class PagePictureComponent implements OnInit {

  endIndex: number;
  startIndex: number;
  lineHeight: number;
  imgSrc: any;
  isShow: boolean;
  private editDataTerms$ = new Subject<any>();

  listOfData = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park',
      desc: 'desc'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park',
      desc: ''
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      desc: ''
    },
    {
      key    : '4',
      name   : '4',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      desc: ''
    },
    {
      key    : '5',
      name   : '5',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      desc: ''
    },
    {
      key    : '6',
      name   : '6',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      desc: ''
    }
  ];

  constructor(private sanizter: DomSanitizer) { }

  ngOnInit() {
    this.imgSrc = null;
    this.isShow = false;
    // 防抖，检查数据书否改变
    this.editDataTerms$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {
        console.log('edit data success');
      });
  }

  /*
  * upload picture
  * */
  uploadImg() {
    $('#uploadPicture').click();
  }

  upload(e) {
    const src = e.srcElement.files[0];
    const test11 = window.URL.createObjectURL(src);
    this.imgSrc = this.sanizter.bypassSecurityTrustUrl(test11);
  }

  /*
  * add data
  * */
  add() {
    if (this.listOfData.length > 9) {
      this.isShow = true;
      this.openTooltips();
      setTimeout(this.closeTooltips, 3000);
    } else {
      this.listOfData.push({
        key    : '',
        name   : '',
        age    : null,
        address: '',
        desc: ''
      });
    }
  }

  /*
  * delete item
  * */
  deleteItem(index) {
    this.listOfData.splice(index, 1);
    this.closeTooltips();
  }

  /*
  * open or close the tooltips
  * */
  openTooltips() {
    $('.prompts').fadeIn(300);
  }
  closeTooltips() {
    $('.prompts').fadeOut(300);
  }
  editData(flag, val) {
    console.log(val);
    this.editDataTerms$.next(val);
  }
}
