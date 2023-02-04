/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-02-02 10:32:59
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-03 20:30:55
 * @FilePath: \react-blog\src\pages\home\articleText.tsx
 * @Description:
 *
 */
import Editor from "@src/components/editor";
import { Article } from "@src/models/Article.model";
import { api } from "@src/services/api.service";
import MDEditor from "@uiw/react-md-editor";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const MarkedWrapper = styled.div`
  padding: 20px 10px;
`;
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
      {article?.article_text ? (
        <MarkedWrapper>
          {/* {article?.article_text} */}
          {/* <Editor {...{ value:article?.article_text }}></Editor> */}

          <MDEditor.Markdown
            source={article?.article_text}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </MarkedWrapper>
      ) : (
        <Skeleton></Skeleton>
      )}
      <div className="change-article-nav">
        
      </div>
    </div>
  );
}
