import React from "react";
import "./styles/tt.css";

class Tpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //순서 willmount -> render -> didmount
  //setInterber : 1초마다 무한히 재생임, 그래서 1초마다 state값이 바뀌며 +1씩 계속 추가함

  componentDidMount() {
    console.log("didmount");
    this.times = setInterval(() => this.sec(), 1000);
  }

  componentWillUnmount() {
    console.log("willmount");
    clearInterval(this.times);
  }

  sec() {
    this.setState({
      date: new Date()
    });
  }
  //toLocaleString
  render() {
    console.log("render");
    return (
      <div className="curT">
        <div className="curT__time">
          <h1>
            {this.state.date.getHours()}:{this.state.date.getMinutes()}:
            {this.state.date.getSeconds()}
          </h1>
        </div>
        <div className="curT__date">
          <h3>
            {this.state.date.getFullYear()}/{this.state.date.getMonth() + 1}/
            {this.state.date.getDate()}
          </h3>
        </div>
        <input
          className="curT__weaBtn"
          type="button"
          value="WEATHER"
          onClick={this._weaBtnHandler}
        />
      </div>
    );
  }
  _weaBtnHandler = () => {
    window.open(
      "https://www.google.com/search?sxsrf=ALeKk00s6bCou0YhPfEbpyLSJN411kMH5Q%3A1585915343250&ei=zyWHXvTqDoLWmAXaxpv4BA&q=weather&oq=weather&gs_lcp=CgZwc3ktYWIQAzIMCAAQgwEQQxBGEIACMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgIIADICCAAyAggAMgIIADoECAAQRzoHCCMQ6gIQJzoFCAAQgwE6BAgAEAo6BAgAEAM6BwgAEIMBEENQlEdYjlVg01hoAXACeAGAAa8CiAHqCJIBBzAuNy4wLjGYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwi0jraFm8zoAhUCK6YKHVrjBk8Q4dUDCAs&uact=5",
      "newWindow"
    );
  };
}

export default Tpage;
