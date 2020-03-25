import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  stations: any = {};
  statuses: any = {};
  mstatus: any = [];
 
  toRemove = [
    'lastupdatedat',
    'linerun',
    'G1',
    'G2',
    'G3',
    'G4'
  ]
  allStatus: any = {};
  constructor(private apiService: ApiService) {
    this.getStations();
    this.getStatus();
    this.getAllStatusCopy();
    this.getmmstatus();
  }

  asIsOrder(a, b) {
    return 1;
  }
  getStations(){
    this.apiService.getStations()
    .subscribe((results: any)=>{
      this.stations = results;
      
    })
  }

  getStatus(){
    this.apiService.getstatus()
    .subscribe((results: any)=>{
      this.statuses = results;
     
      Object.keys(this.statuses).forEach((key)=>{
        if(this.toRemove.includes(key)){
          delete this.statuses[key];
        }
      })
    })
  }

  getmmstatus(){
    this.apiService.getmstatus()
    .subscribe((results: any)=>{
      this.mstatus = results;
    })
  }



  getAllStatusCopy(){
    this.apiService.getstatus()
    .subscribe((results: any)=>{
      this.allStatus = results;
    })
  }
}
