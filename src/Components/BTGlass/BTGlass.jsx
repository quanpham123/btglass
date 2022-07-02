import React, { Component } from 'react';
import style from "./style.module.css";
import "./styles.css";
export default class BTGlass extends Component {
  glassList = [
    {
      id: 1,
      name: "g1",
      imageURl: "./images/glassesImage/g1.jpg"
    },
    {
      id: 2,
      name: "g2",
      imageURl: "./images/glassesImage/g2.jpg"
    },
    {
      id: 3,
      name: "g3",
      imageURl: "./images/glassesImage/g1.jpg"
    },
    {
      id: 4,
      name: "g4",
      imageURl: "./images/glassesImage/g4.jpg"
    },
    {
      id: 5,
      name: "g1",
      imageURl: "./images/glassesImage/g5.jpg"
    },
    {
      id: 6,
      name: "g1",
      imageURl: "./images/glassesImage/g6.jpg"
    },
    {
      id: 7,
      name: "g1",
      imageURl: "./images/glassesImage/g7.jpg"
    },
    {
      id: 8,
      name: "g1",
      imageURl: "./images/glassesImage/g8.jpg"
    },
    {
      id: 9,
      name: "g1",
      imageURl: "./images/glassesImage/g9.jpg"
    },
  ]
  state = {
    imagesURL: "./images/glassesImage/v1.png"
  };



  renderIcon = () => {
    const content = this.glassList.map((ele) => {
      return (
        <td >
          <img width={100} src={ele.imageURl} />
        </td>
      )
    });
    return content;
  };
  handlechangeGlass = (product) => {
    this.setState({
      imagesURL: `./images/glassesImage/${product}.png`
    })
  };

  render() {
    return (
      <div className={style.mainContainer} >
        <h4 >Try glass App Online</h4>
        <div className="row">
          <div className="col-6">
            <div className={style.modelBackground}>
              <div className="image">
                <img src={this.state.imagesURL} alt="" />

              </div>
              <div className="text"></div>
            </div>
          </div>
        </div>
        <div className="row" style={{ background: "white" }}>
          <tr >
            <td onClick={() => {
              this.handlechangeGlass("v1");
            }}>
              <img width={100} src="./images/glassesImage/g1.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v2");
            }} >
              <img width={100} src="./images/glassesImage/g2.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v3");
            }}>
              <img width={100} src="./images/glassesImage/g3.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v4");
            }}>
              <img width={100} src="./images/glassesImage/g4.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v5");
            }}>
              <img width={100} src="./images/glassesImage/g5.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v6");
            }}>
              <img width={100} src="./images/glassesImage/g6.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v7");
            }}>
              <img width={100} src="./images/glassesImage/g7.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v8");
            }}>
              <img width={100} src="./images/glassesImage/g8.jpg" />
            </td>
            <td onClick={() => {
              this.handlechangeGlass("v9");
            }}>
              <img width={100} src="./images/glassesImage/g9.jpg" />
            </td>

          </tr>

        </div>
      </div>
    )
  }
}
