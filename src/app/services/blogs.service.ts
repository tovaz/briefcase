import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  async get(parameters:any={}){
    parameters = JSON.parse(JSON.stringify(parameters));
    parameters = new URLSearchParams(parameters).toString();

    return await this.http.get(ENV.apiServer + '/blogs?' + parameters).toPromise().then( r => {
      return r;
    })
  }

  async getOne(id:any){
    return await this.http.get(ENV.apiServer + '/blogs/'+id).toPromise().then( r => {
      return r;
    })
  }

  async getCategories(){
    return await this.http.get(ENV.apiServer + '/categories').toPromise().then( r => {
      return r;
    });
  }


}
