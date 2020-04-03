import React from "react";
import Circular from "./components/Circular";
import Tpage from "./Tpage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      waitLoading: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        waitLoading: true
      });
    }, 5000);
  }

  render() {
    const { waitLoading } = this.state;

    return <div>{waitLoading ? <Tpage /> : <Circular />}</div>;
  }
}

export default App;
