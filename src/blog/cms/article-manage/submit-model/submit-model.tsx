import { Category } from "@src/blog/models/Category.model";
import { Tag } from "@src/blog/models/Tag.model";
import { api } from "@src/core/services/api.service";
import { Button, Form, Input, Modal, Result, Select } from "antd";
import React, {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
export type FormItemName = "title" | "intro" | "category" | "tag";
export type FormValue = { [key in FormItemName]: string };
const SubmitModel: React.FC<any> = (props) => {
  const { isModalOpen, setIsModalOpen, handleForm } = props;
  const formValue: FormValue = {
    title: "",
    intro: "",
    category: "",
    tag: "",
  };
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [tagList, setTagList] = useState<Tag[]>([]);

  useEffect(() => {
    api.getCategory().then((value) => setCategoryList(value));
    api.getTag().then((value) => setTagList(value));
    return () => {};
  }, []);
  // const formRef = useRef(null);
  // const titleRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  // const introRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleOk = () => {
    handleForm(formValue);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (formItemName: FormItemName) => {
    console.log(formItemName);
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      formValue[formItemName] = event.target.value;
      console.log(formValue);
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
              <input
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
              <input
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
              <select
                onChange={handleChange("category")}
                name="category"
                id="category"
              >
                {categoryList.map((category) => {
                  return (
                    <option value={category.id}>
                      {category.category_name}
                    </option>
                  );
                })}
              </select>
            </label>
          </p>
          {/* 标签 */}
          <p>
            <label htmlFor="tag">
              标签：
              <select onChange={handleChange("tag")} name="tag" id="tag">
                {tagList.map((tag) => {
                  return <option value={tag.id}>{tag.tag_name}</option>;
                })}
              </select>
            </label>
          </p>
        </form>
      </Modal>
    </>
  );
};

export default SubmitModel;
