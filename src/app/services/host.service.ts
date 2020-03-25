import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HostService {
  //host: string = 'http://localhost:8080/';
  host: string = 'http://192.168.1.100:8080/';
  constructor(private http: HttpClient) { }

  getHost(){
    return this.host;
  }
}
