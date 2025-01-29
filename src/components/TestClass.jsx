import React from "react";

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, world!",
    };
  }

  render() {
    return (
      <>
        <h1 className="text-white font-bold">Texto renderizado em classe.</h1>
        <p className="italic">{this.state.message}</p>
      </>
    );
  }
}

export default TestClass;
