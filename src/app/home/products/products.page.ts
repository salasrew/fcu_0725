import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[] = [];

  constructor(
    private navCtrl: NavController,
    private productService: ProductService
   ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  showDetail(selectedProduct: Product) {
    this.navCtrl.navigateForward('home/products/detail/'+selectedProduct.id);  
  }

}
