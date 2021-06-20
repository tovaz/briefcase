import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = ENV.appToken;
    if (!token) {
        return next.handle(req);
        }
    const headers = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
    return next.handle(headers);
  }
}