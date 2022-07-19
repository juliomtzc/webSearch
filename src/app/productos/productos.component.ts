import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getData()
      .subscribe(val => console.log(val));
  }

}
