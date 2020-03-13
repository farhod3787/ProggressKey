import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/productsService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: any = [];
  stars = [];
  activeStars = [];

  constructor(
    private productService: ProductService
  ) {
    this.getProducts();
   }

   getProducts() {
    this.productService.getForMagazine().subscribe( result => {
      this.products = result.json();
      for (let i = 0; i <= this.products.length - 1; i++) {
          this.activeStars[i] = this.products[i].rating;
          this.stars[i] = 5 - this.products[i].rating;
      }
    });
    console.log(this.activeStars);
    console.log(this.stars);
  }
  ngOnInit() {
  }

}
