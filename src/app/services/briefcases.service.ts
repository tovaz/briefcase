import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BriefcasesService {

  constructor(private http: HttpClient) { }

  async get(){
    return await this.http.get(ENV.apiServer + '/briefcases').toPromise().then( r => {
      return r;
    })
  }

  async getOne(id:any){
    return await this.http.get(ENV.apiServer + '/briefcases/'+id).toPromise().then( r => {
      return r;
    })
  }


}
