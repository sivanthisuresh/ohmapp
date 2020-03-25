import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  bool: boolean = true;
  summary: any = {};
  status: any = {};
  todayFaults: any = {};
  totalFaults: any = {};
  line4Active: boolean = true;
  constructor(private apiService: ApiService) {
   
    this.getStatus();
    this.getTodayAnalysis();
    this.getTotalAnalysis();
  }

  

  getStatus(){
    this.apiService.getstatus()
    .subscribe((results: any)=>{
      this.status = results;
      this.line4Active = (+this.status.G1 && +this.status.G2 && +this.status.G3 && +this.status.G4) ? true : false;
      console.log(this.line4Active);
    })
  }

  getTodayAnalysis(){
    this.apiService.getTodayAnalysis()
    .subscribe((results: any)=>{
      this.todayFaults = results;
    })
  }

  getTotalAnalysis(){
    this.apiService.getTotalAnalysis()
    .subscribe((results: any)=>{
      this.totalFaults = results;
    })
  }

}
