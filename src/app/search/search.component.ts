import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  posts : any;
  constructor(private searchService: SearchService )
{

}

  ngOnInit(): void {
    this.searchService.getData()
      .subscribe(val => console.log(val));
  }

}




