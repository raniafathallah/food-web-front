import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.scss']
})
export class ViewFoodComponent implements OnInit{
  id:string='';
  ProductItem:Product[]=[];
  constructor(private route:ActivatedRoute,private listService:ListService){

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.ProductItem=this.listService.getSingleProduct(this.id);
  }

}
