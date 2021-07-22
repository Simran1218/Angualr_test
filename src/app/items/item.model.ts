import { Post } from "../shared/post.model";

export class Item {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Post[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Post[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
