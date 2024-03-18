import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  products: any[];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.loadProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}
