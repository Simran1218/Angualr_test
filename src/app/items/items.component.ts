import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item!: Item;
  id!: number;
  itemService: any;

  constructor(
            private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.item = this.itemService.getItem(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.itemService.addPostsToShoppingList(this.item.ingredients);
  }

  onEditItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteItem() {
    this.itemService.deleteItem(this.id);
    this.router.navigate(['/items']);
  }

}
