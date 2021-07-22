import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../shared/post.model';
import { Item } from './item.model';


@Injectable()
export class ItemService {
  itemsChanged = new Subject<Item[]>();
  private item: Item[] = [];
  items!: Item[];
  slService: any;

  constructor() {}

  setItems(items: Item[]) {
    this.items = items;
    this.itemsChanged.next(this.items.slice());
  }

  getItems() {
    return this.items.slice();
  }

  getItem(index: number) {
    return this.items[index];
  }

  addPostsToShoppingList(posts: Post[]) {
    this.slService.addPosts(posts);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItem(index: number, newItem: Item) {
    this.items[index] = newItem;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
}
