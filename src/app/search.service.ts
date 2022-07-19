
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

 post: any;
  private url = 'https://c1webapiapp120220704011313.azurewebsites.net/api/products';

  constructor(private http: HttpClient) {}



  getData()  {
    return this.http.get(this.url);

  }
}


