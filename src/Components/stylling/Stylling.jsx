import React, { Component } from 'react';

//c1
// stylesheet
import "./style.css";

//c2
import style from"./style.module.css";

//3 cach:
//style sheet ko đuọc su dụng nhiều
//=> tạo ra 1 file css import thong thường
//c2
//module
//=> tạo ra 1 file css [ten].module.css
//c3
//=> inline

export default class Stylling extends Component {
    state={
        fontSize: 30,
    }
    
    // changeSizeText=()=>{
    //     this.setState({
    //         fontSize:this.state.fontSize + 10,
    //     })  
    // }
    // handleDecrease=()=>{
    //     const newstade={
    //         fontSize:this.state.fontSize -10,
    //     };
    //     this.setState(newstade);
    // }
  render() {
    return (
      <div>
        <h4>stylling</h4>

        <p className="cybersoft-bg-color">Stysheet</p>

        <p className={`${style.cybersoft} ${style[`cybersoft-color`]}`}>
            module
        </p>
        {/* <div>
            <button className="btn btn-warning" onClick={this.changeSizeText}>Increase</button>
            <button className="btn btn-danger" onClick={this.handleDecrease}>Decrease</button>

        </div> */}

        <p style={{background:"blue" ,fontSize : this.state.fontSize }}>inline</p>
      </div>
    )
  }
}
