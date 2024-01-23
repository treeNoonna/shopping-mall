import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
    appRoutes,
    withPreloading(PreloadAllModules) //loadChildren 에 해당하는 내용 캐싱해둠 //하는게 좋음(페이지 넘어갈 때 마다 부드럽게 넘어감)
  )]
};
