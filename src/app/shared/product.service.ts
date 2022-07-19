import { Injectable } from '@angular/core';
import { Observable, throwError, of } from "rxjs";
import { Subject} from "rxjs";
import {catchError} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import {Product} from '../model/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://c1webapiapp120220704011313.azurewebsites.net/api/products';

  private products$ = new Subject<Product[]>();

  constructor(private httpClient: HttpClient) { }

  ///get list of observable
  getProduct(): Observable<Product[]>
  {
     return this.httpClient(this.url).pipe(
        map( res => {

        });
     );

}
