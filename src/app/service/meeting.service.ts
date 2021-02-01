import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  MOBILE_BAAS_URL: string = 'https://mobilebaas.com/backend/api/manage/db';
  tableName:string = 'meeting';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'MOBILEBAASKEY' : 'MTYxMjE4NTAyNzA1OG5hdGFsaWEgc291dG8='
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  insert(meeting: any){
    return this.http.post(this.MOBILE_BAAS_URL+'?table='+this.tableName,meeting,this.httpOptions)
  }

  update(meeting: any){
    return this.http.put(this.MOBILE_BAAS_URL+'?table='+this.tableName,meeting,this.httpOptions)
  }

  delete(id: string){
    return this.http.put(this.MOBILE_BAAS_URL+'/'+id+'?table='+this.tableName,this.httpOptions)
  }

  getById(meeting: any){
    return this.http.put(this.MOBILE_BAAS_URL+'?table='+this.tableName,meeting,this.httpOptions)
  }

  getAll(pageNumber:number, totalRecordsPerPage: number, sortField:string, filters:string){
    let parameters = '?table='+this.tableName;

    if(pageNumber != null){
      parameters += '&pageNumber='+pageNumber;
    }

    if(totalRecordsPerPage != null){
      parameters += '&totalRecordsPerPage='+totalRecordsPerPage;
    }

    if(sortField != null){
      parameters += '&sortField='+sortField;
    }

    if(filters != null){
      parameters += '&filters='+filters;
    }

    return this.http.get(this.MOBILE_BAAS_URL+'/find'+parameters,this.httpOptions);
  }

}
