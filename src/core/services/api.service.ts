import { Article } from "@src/blog/models/Article.model";
import { Category } from "@src/blog/models/Category.model";
import { Tag } from "@src/blog/models/Tag.model";
import { httpClient } from "./base-api-config.service";
class Api {
  getArticle():Promise<Article[]> {
    return httpClient.get("/article");
  }

  getCategory():Promise<Category[]> {
    return httpClient.get("/category");
  }

  getTag():Promise<Tag[]>{
    return httpClient.get('/tag')
  }

  postArticle(article:Partial<Article>){
    // 默认用作者1
    return httpClient.post('/article/1',article)
  }
}

export const api = new Api();