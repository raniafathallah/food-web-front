import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit, OnChanges,DoCheck {

  data: Product[] = [];
  token: any;
  isadmin:any=false;
  constructor(private listService: ListService) {
    let token = sessionStorage.getItem('token');
    this.token = token;
    let isadmin = sessionStorage.getItem('role');
       this.isadmin=isadmin;
  }
  // ngDoCheck(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngDoCheck(): void {
    let isadmin = sessionStorage.getItem('role');

    if (isadmin == 'true') {
      this.isadmin = true;
    } else {
      this.isadmin = false;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.listService.getAllProducts();
  }
  ngOnInit() {
    this.data = this.listService.getAllProducts();
    console.log(this.data);
  }

  deleteProduct(id: string): void {
    this.listService.deleteProduct(id, this.token);
    window.location.reload();
  }

  updateProduct(id: string): void {
    let updatedProduct: any = { name: "Television123422" };
    this.listService.updateProduct(updatedProduct, id, this.token);
    window.location.reload();
  }

}


