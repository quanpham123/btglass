import React, { Component } from 'react'

export default class RenderingWithMap extends Component {
    carList = [
        {
            id: 1,
            name: "black",
            price: 1000,
            imageURL: "./images/products/black-car.jpg"
        },
        {
            id: 2,
            name: "steel",
            price: 2000,
            imageURL: "./images/products/steel-car.jpg"
        },
        {
            id: 3,
            name: "silver",
            price: 3000,
            imageURL: "./images/products/silver-car.jpg"
        },
        {
            id: 4,
            name: "red",
            price: 4000,
            imageURL: "./images/products/red-car.jpg"
        },
    ]
    renderCarList = () => {
        const content = this.carList.map((ele) => {
            return(
                <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>
                    <img width={70} src={ele.imageURL}/>
                </td>
            </tr>
            )
        });
        return content;
    };
    render() {
        return (
            <div>
                <h4>RenderingWithMap</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCarList()}
                    </tbody>
                </table>

            </div>
        )
    }
}
