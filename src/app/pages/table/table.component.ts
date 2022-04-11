import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  rowData: any = [];
  columnHeaders: string[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.httpClient.get("assets/mocks/cookies.json").subscribe((data: any) => {
      if(data && data['cookies']) {
        this.rowData = data['cookies'];
        this.columnHeaders = data['cookies'].length && Object.keys(data['cookies'][0]);
      }
    })
  }
}