import { Button, Input } from "antd";
import { Outlet } from "react-router-dom";
import './article-manage.page.css'
import SubmitModel from "./submit-model/submit-model";
const ArticleManage: React.FC = () => {
    const showSubmitModel = ()=>{

    }
  return (
    <>  
    <SubmitModel isModalOpen={true}></SubmitModel>
      <Input.Group compact className="article-manage-title">
        <Input
          style={{ width: "calc(100% - 75px)" }}
          defaultValue="文章标题"
        />
        <Button type="primary" onClick={showSubmitModel}>提交</Button>
      </Input.Group>
      <Outlet />
    </>
  );
};

export default ArticleManage;
