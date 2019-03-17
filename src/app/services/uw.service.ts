import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UwService {
  private header = new HttpHeaders()
    .set('Content-Type', 'application/son');

  constructor(private http: HttpClient) { }
  url = 'https://my-json-server.typicode.com/sanjaynegi/jsonTestRepo/Provenir'

  getUWdata(uwReqObject) {
    return this.http.get(this.url,uwReqObject );
    // return this.http.post(this.url,uwReqObject, {headers: this.header} );
  }
}
