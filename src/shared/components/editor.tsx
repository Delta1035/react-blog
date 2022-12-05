import React, { useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import mermaid from "mermaid";
import { getCodeString } from 'rehype-rewrite';
import katex from 'katex';
import 'katex/dist/katex.css';

const Editor: React.FC<any> = (params:any) => {
  const { value, setValue } = params;
  const [_value, _setValue] = React.useState("**Hello world!!!**");
  const handleChange = ($event: any) => {
    console.log($event);
    setValue($event)
    // if (value) {
    //   setValue($event);
    // } else {
    //   _setValue($event);
    // }
  };

  /** mermaid 解析流程图 */
  const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36);
  const Code = ({ inline, children = [], className, ...props }:any) => {
    const demoid = useRef(`dome${randomid()}`);
    const code = getCode(children);
    const demo = useRef(null);
    useEffect(() => {
      if (demo.current) {
        try {
          const str = mermaid.render(
            demoid.current,
            code,
            () => null,
            demo.current
          );
          // @ts-ignore
          demo.current.innerHTML = str;
        } catch (error) {
          // @ts-ignore
          demo.current.innerHTML = error;
        }
      }
    }, [code, demo]);

    if (
      typeof code === "string" &&
      typeof className === "string" &&
      /^language-mermaid/.test(className.toLocaleLowerCase())
    ) {
      return (
        <code ref={demo}>
          <code id={demoid.current} style={{ display: "none" }} />
        </code>
      );
    }
    return <code className={String(className)}>{children}</code>;
  };

  const getCode: any = (arr = []) =>
    arr
      .map((dt: any) => {
        if (typeof dt === "string") {
          return dt;
        }
        if (dt.props && dt.props.children) {
          return getCode(dt.props.children);
        }
        return false;
      })
      .filter(Boolean)
      .join("");
  /** 解析数学公式 */
  return (
    <div>
      <MDEditor
        value={value ?? _value}
        onChange={handleChange}
        previewOptions={{
          components: {
            code: Code,
          },
        }}
      />
      {/* 渲染md文件的组件 */}
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </div>
  );
};
export default Editor;
