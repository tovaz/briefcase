import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private http: HttpClient) { }

  async get(){
    return await this.http.get(ENV.apiServer + '/technologies').toPromise().then( r => {
      return r;
    })
  }
}
