import React, { useState, useEffect } from "react";

function CompA(props) {
  return (
    <>
      <h1>CompA</h1>
      <div>My prop1: {props.myProp1}</div>
      <div>My prop2: {props.myProp2}</div>
      <div>My prop3: {props.myProp3.toString()}</div>
      <div>My prop4: {<props.myProp4 />}</div>
    </>
  );
}
function CompB() {
  return <h1>CompB</h1>;
}

class CompC extends React.Component {
  constructor() {
    super();
    this.state = {
      myValue: 10,
    };
  }
  // state = {
  //   myValue: 10,
  // };

  changeState(incrementor) {
    this.setState({
      myValue: incrementor,
    });
  }
  render() {
    const { myValue } = this.state;
    return (
      <>
        <h1>CompC</h1>
        <p>{myValue}</p>
        <button onClick={() => this.changeState(myValue + 1)}>+</button>
        <button onClick={() => this.changeState(myValue - 1)}>-</button>
      </>
    );
  }
}

export default function Home() {
  const [myValue, setValue] = useState(10);
  const [myOtherValue, setOtherValue] = useState(100);

  useEffect(() => {
    console.log("useEffect");
  }, [myValue]);

  console.log("View Updated");

  const changeValue = (incrementor) => {
    setValue(myValue + incrementor);
    // console.log(myValue);
  };

  return (
    <>
      <h1>Current Value: {myValue}</h1>
      <button onClick={() => setValue(myValue + 1)}>+</button>
      <button onClick={() => setValue(myValue - 1)}>_</button>
      <hr></hr>
      <h1>My Other Value: {myOtherValue}</h1>
      <button onClick={() => setOtherValue(myOtherValue + 1)}>+</button>
      <button onClick={() => setOtherValue(myOtherValue - 1)}>_</button>

      <CompA
        myProp1={myValue}
        myProp2={"my custom Value"}
        myProp3={true}
        myProp4={() => <div>My New JSX</div>}
      />
      {/* <CompB /> */}
      {/* <CompC /> */}
    </>
  );
}
