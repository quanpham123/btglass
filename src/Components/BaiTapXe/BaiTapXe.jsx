import React, { Component } from 'react'

export default class BaiTapXe extends Component {
  state={
    imagesURL:"./images/products/black-car.jpg"
  }
  handleChangeColor=(color)=>{
    this.setState({
      imagesURL:`./images/products/${color}-car.jpg`
    })
  };
  render() {
    return (
      <div>
         <h4>bai tap xe</h4>
         <div className="row">
          <div className="col-7">
            <img src={this.state.imagesURL} alt="" className="img-fluid" />
          </div>
          <div className="col-5">
              <div className="card">
                <div className="card-header">
                  Colors
                </div>
                <div className="card-body">
                  <div onClick={()=>{
                    this.handleChangeColor("black");
                  }}>
                    <img width={70} src="./images/icons/icon-black.jpg" alt="" />
                    <span>black</span>
                  </div>
                  <div onClick={()=>{
                    this.handleChangeColor("silver");
                  }}>
                    <img width={70} src="./images/icons/icon-silver.jpg" alt="" />
                    <span>silver</span>
                  </div>
                  <div onClick={()=>{
                    this.handleChangeColor("steel");
                  }}>
                    <img width={70} src="./images/icons/icon-steel.jpg" alt="" />
                    <span>steel</span>
                  </div>
                  <div onClick={()=>{
                    this.handleChangeColor("red");
                  }}>
                    <img width={70} src="./images/icons/icon-red.jpg" alt="" />
                    <span>red</span>
                  </div>
                </div>
              </div>
          </div>
         </div>
      </div>
    )
  }
}
