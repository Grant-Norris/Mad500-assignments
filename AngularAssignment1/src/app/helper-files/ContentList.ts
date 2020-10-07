import { Content } from './content-interfaces';

export class ContentList {
  static contentCount = 0;
  private items: Content[];

  constructor(item: Content) {
    this.items[0] = item;
  }
  get itemsList(): Content[]{
    return this.items;
  }
  count(): number{
    return this.items.length;
  }
   add(content: Content): void{
    this.items.push(content);
  }

  display(index: number): Content{
    return this.items[index];
  }
}


