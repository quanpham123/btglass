import React, { Component } from 'react'

export default class ChildProps extends Component {
  render() {
    return (
        <div className="card">
        <img className="card-img-top" src={this.props.movie.imageUrl} alt />
        <div className="card-body">
            <h4 className="card-title">{this.props.movie.name}</h4>
            <button className="btn btn-info" onClick={()=>this.props.showname(this.props.movie.name)}>xem chi tiết </button>
        </div>
    </div>
    )
  }
}
    