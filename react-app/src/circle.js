import React, { Component } from 'react';

class Circle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.props.num,
      clicked: true
    }
    this.countDown = this.countDown.bind(this);
    this.toggleEvent = this.toggleEvent.bind(this);
  }

  countDown() {
    this.setState({
      number: this.state.number - 1
    });
  }
  toggleEvent() {
    this.setState({
      clicked: !this.state.clicked
    })
    if(!this.state.clicked && this.state.number > 0) {
      this.interval = setInterval(() => {
        this.countDown();
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.countDown();
    }, 1000);
  }
  componentDidUpdate() {
    if (this.state.number === 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { sty } = this.props;
    const style = {
      width: (sty),
      height: (sty),
      borderRadius: '50%',
      backgroundColor: '#F1B24A',
    }
    return (
      <div className="cirle-block">
        <button onClick={this.toggleEvent}>{ this.state.clicked? 'Stop' : 'Start' }</button>
        <div clasName="circle-item" style={style} onClick={this.countDown}>{ this.state.number }</div>
      </div>
    );
  }
}

export default Circle;
