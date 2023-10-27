/* eslint-disable react/prop-types */
import { Component } from "react";
import "./App.css";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/Topbar";
// import Main from "./Components/Main";
// import SideBar from "./Components/SideBar";
// import TopBar from "./Components/Topbar";
import WorkSpace from "./Components/WorkSpace";
import { useState } from "react";

// function App() {
//   return (
//     <div className="app">
//       {/* <WorkSpace>
//         <TopBar>Top bar</TopBar>
//         <SideBar>Side bar</SideBar>
//         <Main> Main bar</Main>
//       </WorkSpace> */}
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  //initlization
  state = {
    counter: 1,
    fetchData: {},
  };

  // mounting
  componentDidMount() {
    console.log("mounting");
    this.fetchData(this.state.counter);
  }

  // updation
  componentDidUpdate(prevProp, prevState) {
    console.log("updation", prevState);
    if (prevState.counter != this.state.counter) {
      this.fetchData(this.state.counter);
    }
  }
  addCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  //https://swapi.dev/api/people/
  fetchData(index) {
    fetch(`https://swapi.dev/api/people/${index}`)
      .then((res) => res.json())
      .then((data) => this.setState({ fetchData: data }));
  }

  render() {
    return (
      <>
        <Greetings />
        <Counter />
        <Counter2 />
        <Information name={"sanjay"} batch={"B51WD2"} />
        <hr></hr>
        <div>{this.state.fetchData.name || "Fteching data...."}</div>
        <button onClick={this.addCounter}>Next</button>
      </>
    );
  }
}

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  // with binding
  increment() {
    this.setState((prevCount) => ({
      count: prevCount.count + 1,
    }));
  }
  // without binding
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>INC</button>
        <button onClick={this.decrement}>DEC</button>
      </>
    );
  }
}

function Counter2() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter - 2</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <button onClick={() => setCount(count - 1)}>DEC</button>
    </>
  );
}

class Information extends Component {
  render() {
    return (
      <div>
        Hi there Im {this.props.name} and Im from
        {this.props.batch}
      </div>
    );
  }
}

// Greetings
// Welcome all good morning , eve, night

class Greetings extends Component {
  render() {
    // normal js functions
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);
    let currentTime;
    if (hours < 12) {
      currentTime = "Morning";
    } else if (hours >= 12 && hours < 18) {
      currentTime = "Evening";
    } else {
      currentTime = "Night";
    }

    return (
      <div>
        <h1>Hi Good {currentTime} All</h1>
      </div>
    );
  }
}
