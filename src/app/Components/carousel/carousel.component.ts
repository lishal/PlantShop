import { Component, OnInit, ElementRef } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  products: any[];
  activeIndex: number = 2;
  activeIndexData: any[];
  constructor(
    private dataService: DataService,
    private elementRef: ElementRef,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.dataService.loadProducts().subscribe((data) => {
      this.products = data.products;
    });

    setTimeout(() => {
      this.activeIndexData = this.products.filter(
        (product) => product.id == this.activeIndex
      );
    }, 400);
  }

  onPreviousBtnClick() {
    var elementRef =
      this.elementRef.nativeElement.children[0].getElementsByClassName(
        'productContainer'
      )[0];
    var productSlider = elementRef.getElementsByClassName('productDetail');
    for (let i = 0; i < productSlider.length; i++) {
      productSlider[i].classList.remove('activeProduct');
    }
    elementRef.prepend(productSlider[productSlider.length - 1]);
    elementRef.children[1].classList.add('activeProduct');
    this.activeIndex =
      elementRef.getElementsByClassName('activeProduct')[0].children[0].id;
    this.activeIndexData = this.products.filter(
      (product) => product.id == this.activeIndex
    );

    // elementRef.children[0].classList.add('activeProduct');
    // elementRef.productSlider[0].classList.add('activeProduct');
    // if (this.selectedIndex === 0) {
    //   this.selectedIndex = this.products.length - 1;
    // } else {
    //   this.selectedIndex--;
    // }
  }
  onNextBtnClick() {
    var elementRef =
      this.elementRef.nativeElement.children[0].getElementsByClassName(
        'productContainer'
      )[0];
    var productSlider = elementRef.getElementsByClassName('productDetail');
    for (let i = 0; i < productSlider.length; i++) {
      productSlider[i].classList.remove('activeProduct');
    }
    elementRef.append(productSlider[0]);
    elementRef.children[1].classList.add('activeProduct');
    this.activeIndex =
      elementRef.getElementsByClassName('activeProduct')[0].children[0].id;
    this.activeIndexData = this.products.filter(
      (product) => product.id == this.activeIndex
    );
    // elementRef.children[0].classList.add('activeProduct');
    // if (this.selectedIndex === this.products.length - 1) {
    //   this.selectedIndex = 0;
    // } else {
    //   this.selectedIndex++;
    // }
  }
  addToCart(id: any) {
    let itemToBeAdded = this.products.find((product) => product.id == id);
    this.cartService.addToCart(itemToBeAdded);
  }
}
