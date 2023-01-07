import { Article } from "@src/models/Article.model";
import { Category } from "@src/models/Category.model";
import { Tag } from "@src/models/Tag.model";
import { httpClient } from "./base-api-config.service";
class Api {
  getArticle(skip:number,take:number):Promise<Article[]> {
    return httpClient.get(`/article/${skip}/${take}`);
  }

  getArticleCount():Promise<number>{
    return httpClient.get(`/article/count`);
  }

  getCategory():Promise<Category[]> {
    return httpClient.get<Category[],Category[],Category[]>("/category");
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
