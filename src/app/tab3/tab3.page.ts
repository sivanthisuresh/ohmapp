import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  faults: any = [];
  constructor(private apiService: ApiService) {
    this.getAllFaults();
  }

  getAllFaults(){
    this.apiService.getFault()
    .subscribe((results: any)=>{
      this.faults = results;
    })
  }
}
