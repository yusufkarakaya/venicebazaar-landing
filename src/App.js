import { Component } from "react";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Benefits />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
