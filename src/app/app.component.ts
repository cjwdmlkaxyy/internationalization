import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'managementSystem';

  constructor(public translate: TranslateService) {
    // 添加语言
    translate.addLangs(['en', 'zh']);
    // 设置默认语言
    translate.setDefaultLang('en');
    // 获取当前浏览器环境语言，比如en、zh
    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
    let lang = localStorage.getItem('lang');
    console.log(lang);
    lang === null ? this.translate.use('en') : this.translate.use(lang);
  }
}
