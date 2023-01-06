import { Category } from "@src/models/Category.model";
import { Tag } from "@src/models/Tag.model";
import { api } from "@src/services/api.service";
import { Modal } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
export type FormItemName = "title" | "intro" | "category" | "tag";
export type FormValue = { [key in FormItemName]: string };

const Input = styled.input`
  outline: 2px solid #1890ff;
  border: none;
  border-radius: 2px;
  width: 150px;
`;

const Select = styled.select`
  outline: 2px solid #1890ff;
  border: none;
  border-radius: 2px;
  width: 150px;
`;

const SubmitModel: React.FC<any> = (props) => {
  const { isModalOpen, setIsModalOpen, handleForm } = props;
  const formValue: FormValue = {
    title: "",
    intro: "",
    category: "",
    tag: "",
  };
  const [tagList, setTagList] = useState<Tag[] | undefined[]>([]);
  const [categoryList, setCategoryList] = useState<Category[] | undefined[]>(
    []
  );
 
  useEffect(() => {
    api.getCategory().then((value) => setCategoryList(value));
    api.getTag().then((value) => setTagList(value));
    return () => {
    };
  }, []);

  const handleOk = () => {
    handleForm(formValue);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (formItemName: FormItemName) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      formValue[formItemName] = event.target.value;
    };
  };

  return (
    <>
      <Modal
        title="提交信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          {/* 标题 */}
          <p>
            <label htmlFor="title">
              标题：
              <Input
                onChange={handleChange("title")}
                type="text"
                id="title"
                name="title"
                defaultValue={""}
                placeholder="请输入标题"
              />
            </label>
          </p>
          {/* 简介 */}
          <p>
            <label htmlFor="intro">
              简介：
              <Input
                onChange={handleChange("intro")}
                type="text"
                id="intro"
                name="intro"
                defaultValue={""}
                placeholder="请输入简介"
              />
            </label>
          </p>
          {/* 分类 */}
          <p>
            <label htmlFor="category">
              分类：
              <Select
                onChange={handleChange("category")}
                name="category"
                id="category"
              >
                {
                categoryList.map((category) => {
                  return category ? (
                    <option key={category.category_name} value={category.id}> 
                      {category.category_name}
                    </option>
                  ) : (
                    <option></option>
                  );
                })}
              </Select>
            </label>
          </p>
          {/* 标签 */}
          <p>
            <label htmlFor="tag">
              标签：
              <Select onChange={handleChange("tag")} name="tag" id="tag">
                {tagList.map((tag) => {
                  return tag?<option key={tag.tag_name} value={tag.id}>{tag.tag_name}</option>:<option></option>;
                })}
              </Select>
            </label>
          </p>
        </form>
      </Modal>
    </>
  );
};

export default SubmitModel;
