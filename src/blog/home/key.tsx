import React, { Fragment } from "react";

class Key extends React.Component {
  state: Readonly<{ list: any[] }> = {
    list: [
      { id: 1, name: "zhangsan1", age: 18 },
      { id: 2, name: "zhangsan2", age: 18 },
      { id: 3, name: "zhangsan3", age: 18 },
    ],
  };
  addPerson = () => {
    this.setState({
      list:[
        {id:this.state.list.length+1,name:4,age:19},...this.state.list
      ]
    })
  };
  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.addPerson}>add</button>
        <ul>
          {this.state.list.map((_li,_index) => {
            return (
              <li key={_index}>
               {_li.name} :<input type="text" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Key;
