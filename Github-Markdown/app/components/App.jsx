import React from 'react';

import Input from "./UserInput";
import Footer from "./Footer";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="topBar container-fluid">
          <h2 className="title">MarkDown Text</h2>
        </div>
        <Input />
        <Footer />
      </div>
    );
  }
}
