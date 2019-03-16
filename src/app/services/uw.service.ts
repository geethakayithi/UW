import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UwService {

  constructor(private http: HttpClient) { }

  getUWdata() {
    return this.http.get('https://my-json-server.typicode.com/sanjaynegi/jsonTestRepo/Provenir');
  }
}
