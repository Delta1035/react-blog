import { Input, Button, notification } from "antd";
import { useState } from "react";
import SubmitModel, { FormValue } from "../submit-model/submit-model";
import styled from "styled-components";
import { api } from "@src/services/api.service";
import Editor from "@src/components/editor";
const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const FooterContainer = styled.div`
  padding-top: 20px;
`;

const Edit: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const showSubmitModel = () => {
    setIsModalOpen(true);
  };
  const handleForm = async (formValue: FormValue) => {
    console.log("formValue", formValue);
    if(value.length<10){
      notification.info({message:'文章字数小于10'});
      return;
    }
    await api.postArticle({
      article_text:value,
      article_name:formValue.title,
    })

    setIsModalOpen(false); // 关闭提交窗口
  };

  return (
    <EditContainer>
      <SubmitModel
        {...{ isModalOpen, setIsModalOpen, handleForm }}
      ></SubmitModel>
      <Editor {...{ value, setValue }}></Editor>
      <FooterContainer>
        <Button block type="primary" onClick={showSubmitModel}>
          提交
        </Button>
      </FooterContainer>
    </EditContainer>
  );
};

export default Edit;
