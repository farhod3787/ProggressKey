import { Component, OnInit } from '@angular/core';
import { News_Service } from 'src/app/shared/service/news_Service';
import { ProductService } from 'src/app/shared/service/productsService';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  news: any = [];
  constructor(
    private productService: ProductService
  ) {
    this.getNews();
  }

  getNews() {
    this.productService.getAll().subscribe( result => {
      this.news = result.json();
    });
  }

  ngOnInit() {
  }

}
