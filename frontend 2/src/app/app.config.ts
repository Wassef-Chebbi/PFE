// import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// import { KeycloakService } from 'keycloak-angular';
// //import { httpTokenInterceptor } from './core/interceptor/http-token.interceptor';
// import { routes } from './app.routes';

// // function initializeKeycloak(keycloak: KeycloakService) {
// //   return () =>
// //     keycloak.init({
// //       config: {
// //         url: 'http://localhost:8081',
// //         realm: 'RPA',
// //         clientId: 'rpa'
// //       },
// //       initOptions: {
// //         onLoad: 'check-sso',
// //         silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
// //       }
// //     });
// // }

// export const appConfig: ApplicationConfig = {

//   providers: [
//     // KeycloakService,
//     // provideRouter(routes),
//     // {
//     //   provide: APP_INITIALIZER,
//     //   deps: [KeycloakService],
//     //   useFactory: initializeKeycloak,
//     //   multi: true
//     // },
//     provideHttpClient(withFetch()),
//     //   withInterceptors([httpTokenInterceptor])),
//     // provideAnimationsAsync()

//   ]
// };
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withFetch())]
};
