import React, { Component } from 'react';
import danhsachgiay from '../../../Data/data.json';
import Giay from './Giay';

export default class BaiTapGiay extends Component {
    color=["primary","success","danger"];
    renderShoesList=()=>{
        return danhsachgiay.map(ele=>{
            return(
                <div className="col-4" key={ele.id}>
                    <Giay showDescription={this.showDescription} item={ele}>
                        {
                            this.color.map(item=>{
                                return <span key={item.key} className={`badge badge-${item}`}>{item}</span>
                            })
                        }
                    </Giay>

                </div>
            )
        });
    }
    showDescription=(description)=>{
        alert(description);
    };
    render() {
        return (
            <div className="row">
                {this.renderShoesList()}
            </div>
        )
    }
}
