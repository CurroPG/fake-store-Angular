import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import { ProductServiceService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalogoProductos';
  products: Product[] = [];
  private productService = inject(ProductServiceService);

  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe(products => {
        this.products= products;
      });

  }
}
