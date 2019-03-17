import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UwService {

  constructor(private http: HttpClient) { }
  url = 'https://my-json-server.typicode.com/sanjaynegi/jsonTestRepo/Provenir'

  getUWdata(uwReqObject) {
    // return this.http.get(this.url,uwReqObject );
    return this.http.post(this.url,uwReqObject );
  }
}
