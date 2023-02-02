/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-02-02 10:32:59
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-02-02 13:34:29
 * @FilePath: \react-blog\src\pages\home\articleText.tsx
 * @Description:
 *
 */
import Editor from "@src/components/editor";
import { Article } from "@src/models/Article.model";
import { api } from "@src/services/api.service";
import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function articleText() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    api.getArticleById(Number(id)).then((res) => {
      console.log("res :>> ", res);
      setArticle(res);
    });
  }, []);
  return (
    <div>
      <p>
        {/* {article?.article_text} */}
        {/* <Editor {...{ value:article?.article_text }}></Editor> */}

        <MDEditor.Markdown
          source={article?.article_text}
          style={{ whiteSpace: "pre-wrap" }}
        />
      </p>
    </div>
  );
}
