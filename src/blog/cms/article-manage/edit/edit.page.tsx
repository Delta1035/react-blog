import Editor from "@src/shared/components/editor";
import { Input, Button } from "antd";
import { useState } from "react";
import SubmitModel, { FormValue } from "../submit-model/submit-model";
import styled from 'styled-components'
import { api } from "@src/core/services/api.service";
const EditContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const FooterContainer = styled.div`
  padding-top: 20px;
`


const Edit: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value,setValue] = useState('')
  const showSubmitModel = () => {
    setIsModalOpen(true);
  };
  const handleForm =async (formValue:FormValue)=>{
    console.log('formValue',formValue);
    await api.postArticle({
      article_text:value,
      article_name:formValue.title,
    })
  }
  
  return (
    <EditContainer>
      <SubmitModel {...{ isModalOpen, setIsModalOpen,handleForm }}></SubmitModel>
      <Editor {...{value,setValue}} ></Editor>
      <FooterContainer>
      <Button block type="primary" onClick={showSubmitModel}>
          提交
        </Button>
      </FooterContainer>
    </EditContainer>
  );
};

export default Edit;



