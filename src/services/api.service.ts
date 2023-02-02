/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2022-12-23 13:12:41
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-02-02 11:32:57
 * @FilePath: \react-blog\src\services\api.service.ts
 * @Description: 
 * 
 */
import { Article } from "@src/models/Article.model";
import { Category } from "@src/models/Category.model";
import { Tag } from "@src/models/Tag.model";
import { httpClient } from "./base-api-config.service";
class Api {

  getArticleById(id:number):Promise<Article>{
    return httpClient.get(`/article/id/?id=${id}`);
  }

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
