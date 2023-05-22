import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';
// import { PRODUCT_URL} from '../constraints/urls';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ListService  {

 // url: string = 'http://localhost:7000/api/products';
  ProductArray: Product[] = [];
  SingleProduct: any;
  useId: string = '';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    this.ProductArray = [];
    this.http.get<Product[]>(`${environment.PRODUCT_URL}`)
      .subscribe((resultData: any) => {
        for (let item of resultData.data.data) {
          this.ProductArray.push(item);
        }
        console.log("product arrrr" + resultData);
      });
    return this.ProductArray;
  }

  getSingleProduct(id: string) {
    this.ProductArray = [];
    this.http.get<Product>(`${environment.PRODUCT_URL}` + "/" + id)
      .subscribe((resultData: any) => {
        this.ProductArray.push(resultData);
      });
    return this.ProductArray;
  }

  getModifiedProduct(id: string):any {
    this.ProductArray = [];
    return  this.http.get<Product>(`${environment.PRODUCT_URL}`+ "/" + id)
      .subscribe((resultData: any) => {
        sessionStorage.setItem("singleProduct", JSON.stringify(resultData));
        console.log("real"+resultData.name);
      });
  }
  addProduct(newProduct: any, token: string) {

    this.http.post(`${environment.PRODUCT_URL}`,newProduct, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: token
      })
    })
      .subscribe((resultData: any) => {
        console.log("New productttttt" + resultData.name);
      });
  
  }


  deleteProduct(id: string, token: any) {

    this.http.delete(`${environment.PRODUCT_URL}` + "/" + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: token
      })
    })
      .subscribe((resultData: any) => {
      });

  }

  updateProduct(updatedProduct: any, id: string, token: any) {

    this.http.put(`${environment.PRODUCT_URL}`+ "/" + id, updatedProduct, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: token
      })
    })
      .subscribe((resultData: any) => {
      });

  }
}



