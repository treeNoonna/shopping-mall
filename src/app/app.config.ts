import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch() //fetch API 는 기존 http call 보다 더 쉬워짐
    ), //httpModule이 없어지면서 appconfig에 넣음
    provideRouter(
    appRoutes,
    withPreloading(PreloadAllModules) //loadChildren 에 해당하는 내용 캐싱해둠 //하는게 좋음(페이지 넘어갈 때 마다 부드럽게 넘어감)
  )]


};
