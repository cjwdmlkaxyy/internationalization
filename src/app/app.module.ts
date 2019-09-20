import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UersManageMentComponent } from './component/uers-manage-ment/uers-manage-ment.component';
import { LostSthComponent } from './component/newsManagement/lost-sth/lost-sth.component';
import { FindSthComponent } from './component/newsManagement/find-sth/find-sth.component';
import { SildeBarComponent } from './component/silde-bar/silde-bar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FrameComponent } from './component/frame/frame.component';
import { HomeComponent } from './component/home/home.component';
import { SlideshowComponent } from './component/pictureManagement/slideshow/slideshow.component';
import { PagePictureComponent } from './component/pictureManagement/page-picture/page-picture.component';
import { PublicSourceComponent } from './component/publicSource/prompts/public-source.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/*directive*/
import { WholePageListenDirective } from './directive/wholePageListen.directive';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

export function creatTranslateHttpLoader(http: HttpClient) {
       return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    UersManageMentComponent,
    LostSthComponent,
    FindSthComponent,
    SildeBarComponent,
    LoginComponent,
    RegisterComponent,
    FrameComponent,
    HomeComponent,
    WholePageListenDirective,
    SlideshowComponent,
    PagePictureComponent,
    PublicSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: creatTranslateHttpLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
