import React, { Component } from 'react'

export default class HandllingEven extends Component {
    handleLogin=()=>{
        alert("welcom cybersoft!");
    }
    handleLogout=(name)=>{
        alert(`${name} đã đăng xuất`);
    };
  render() {
    return (
      <div>
        <h5>HandllingEven</h5>
        {/* ko có tham số */}
        <button onClick={this.handleLogin} className="btn btn-success">login</button>
        <button onClick={()=>{
             alert("welcom cybersoft 222");
        }} 
        className="btn btn-info">
            login2
        </button>
        {/*có tham số*/ }
        <button onClick={this.handleLogout.bind(this, "cybersoft")} className="btn btn-warning">logout</button> {/* es5*/ }
        <button 
        onClick={()=>{
            this.handleLogout("quan");
        }}
        className="btn btn-danger">
            logout2
        </button>

      </div>
    )
  }
}
