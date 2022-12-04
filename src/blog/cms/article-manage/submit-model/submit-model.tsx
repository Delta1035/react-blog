import { Button, Form, Input, Modal, Select } from "antd";
import layout from "antd/lib/layout";
import React from "react";

const SubmitModel: React.FC<any> = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Modal
        title="提交信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} initialValues={{title:'title',description:'description',category:'lucy',tag:'lucy'}}>
          <Form.Item name="title" label="标题" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="描述"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          {/* 选择类别 */}
          {/* <Form.Item name="category" label="分类" rules={[{ required: true }]}>
            <Select
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "disabled",
                  disabled: true,
                  label: "Disabled",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </Form.Item> */}
          {/* 选择标签 */}
          {/* <Form.Item name="tag" label="标签" rules={[{ required: true }]}>
            <Select
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "disabled",
                  disabled: true,
                  label: "Disabled",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};

export default SubmitModel;
