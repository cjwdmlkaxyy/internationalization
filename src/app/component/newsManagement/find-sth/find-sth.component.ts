import { Component, OnInit, AfterViewInit, ElementRef, Renderer2  } from '@angular/core';
import { every } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-find-sth',
  templateUrl: './find-sth.component.html',
  styleUrls: ['./find-sth.component.scss']
})
export class FindSthComponent implements OnInit, AfterViewInit  {

  // box = document.getElementsByClassName('drag-popup');
  // boxHeader = document.getElementsByClassName('drag-popup-header');
  // div开始移动时的x，y坐标
  divX = 0;
  divY = 0;
  // 鼠标点下时，鼠标所在的坐标
  mouseDownX = 0;
  mouseDownY = 0;
  // div元素
  divElement: any;
  divHeaderEl: any;

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) {
    // this.mouseDown$.map((event) => ({
    //
    // }))
  }

  ngOnInit() {
    // /******every*******/
    // const source = of(1, 2, 3, 4, 5);
    // const example = source.pipe(
    //   every(val => val < 6)
    // );
    // const subscribe = example.subscribe(val => console.log(val));
    //
    // /********create********/
    // const hello = Observable.create( observer => {
    //   observer.next('Hello');
    //   observer.next('World');
    // });
    // const helloSubscribe = hello.subscribe(val => console.log(val));
    this.divElement = this.getDivElement();
    this.divHeaderEl = this.getDivTitleElement();
  }

  ngAfterViewInit() {
    const mouseMove$: any = fromEvent<MouseEvent>(this.el.nativeElement, 'mousemove');
    const mouseUp$: any = fromEvent<MouseEvent>(this.el.nativeElement, 'mouseup');
    const mouseDown$ = fromEvent<MouseEvent>(this.divHeaderEl, 'mousedown');
    // mouseDown$.map
    mouseDown$.subscribe(event => {
      this.divX = this.divElement.offsetLeft;
      this.divY = this.divElement.offsetTop;
    });
    
  }

  getDivElement() {
    return this.el.nativeElement.querySelector('.drag-popup');
  }
  getDivTitleElement() {
    return this.el.nativeElement.querySelector('.drag-popup-header');
  }

}
