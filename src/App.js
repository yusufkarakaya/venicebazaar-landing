import { Component } from "react";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="pr-44 pl-44">
        <Header />
        <h1>App Component</h1>
      </div>
    );
  }
}

export default App;
