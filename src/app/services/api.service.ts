import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private hostService: HostService) { }

  getStations(){
    return this.http.get(this.hostService.getHost()+'ctti/public/api/getnames');
  }

  getFault(){
    return this.http.get(this.hostService.getHost()+'ctti/public/api/fault');
  }

  getTodayAnalysis(){
    return this.http.get(this.hostService.getHost()+'ctti/public/api/todayanlysis');
  }

  getTotalAnalysis(){
    return this.http.get(this.hostService.getHost()+'ctti/public/api/totalanlysis');
  }

  getNames(){
    return this.http.get(this.hostService.getHost()+'ctti/public/api/getnames');
  }

  getstatus(){
    return this.http.get(this.hostService.getHost()+'ctti/public/api/status');
  }

  getmstatus(){
    return this.http.get(this.hostService.getHost()+'ctti/public/api/mstatus');
  }

 
}
