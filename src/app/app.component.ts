import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model = new Model();
  isDisplay = true;

  ngOnInit() {
    this.loadItems();
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(value: string) {
    if (value.trim() !== "") {
      const existingItem = this.model.items.find(item => item.description === value);
      if (!existingItem) {
        this.model.items.push(new TodoItem(value, false));
        this.saveItems();
      } else {
        console.log('Item already exists:', existingItem.description);
      }
    }
  }

  saveItems() {
    localStorage.setItem('todos', JSON.stringify(this.model.items));
  }

  loadItems() {
    const items = localStorage.getItem('todos');
    if (items) {
      this.model.items = JSON.parse(items).map((item: any) => new TodoItem(item.description, item.action));
    }
  }

  deleteItem(index: number) {
    this.model.items.splice(index, 1);
    this.saveItems();
  }
}