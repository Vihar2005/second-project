import { yellow } from '@mui/material/colors';
import React, { Component } from 'react'

export default class LifecycleClasss extends Component {
  constructor(props) {
    super(props);
    console.log("constructor calling....");
    this.state = {
      color: 'red'
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: 'yellow'
      })
    }, 2000);
    console.log('component did mount called....');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('props value :' + props.color);
    console.log('getDerivedStateFromProps called.....' + state.color);
    return null;
    // return state;
  }

  shouldComponentUpdate() {
    console.log('should component update called....');
    // return true;
    return false;
  }
  getSnapshotBeforeUpdate(prevProps,PrevState) {
    console.log('get Snapshot Before update called.....');
    console.log('get prev color is : '+PrevState.color);
    return null;
  }
  componentDidUpdate(){
    console.log('finally component updeted...');
  }
  componentWillUnmount(){
    console.log('Lifecycle completed');
  }


  render() {
    console.log('render calling....');
    console.log(this.state.color);
    return (
      <div>
        Color name is :{this.state.color}
      </div>
    )
  }
}
