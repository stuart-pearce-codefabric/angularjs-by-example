import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ]
})
export class AppConfigModule {}

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        event => {},
        error => {
          if (error.status === 401) {
            console.error('You are unauthorised to access the requested resource (401)');
          } else if (error.status === 404) {
            console.error('The requested resource could not be found (404)');
          } else if (error.status === 500) {
            console.error('Internal server error (500)');
          }
        }
      )
    );
  }
}

@Injectable()
export class RouteChangeService {
  constructor(private pageValues: PageValues) {}

  onRouteChangeStart() {
    this.pageValues.loading = true;
  }

  onRouteChangeSuccess() {
    this.pageValues.loading = false;
  }
}
