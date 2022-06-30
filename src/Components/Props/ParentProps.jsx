import React, { Component } from 'react';
import ChildProps from './ChildProps';

export default class ParentProps extends Component {
    imageUrl1='https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/e/v/evt-_main_poster-_facebook_1__2.jpg'
    imageUrl2='https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/_/i/_i_n_tho_i_en_-_24.06.2022_2.jpg'
    
    movie1={
        name: "em và trịnh",
        imageUrl:  'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/e/v/evt-_main_poster-_facebook_1__2.jpg'
    };
    movie3={
        name: "thế giới khung long",
        imageUrl: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_jurassic_world_dominion_-10062022_2.jpg'
    };
    showname=(name)=>{
        alert(name);
    };
    render() {
        return (
            <div>
                <h4>props</h4>
                <div className="row w-75 mx-auto">
                    <div className="col-4">
                        <ChildProps showname={this.showname} movie={this.movie1}/>
                    </div>
                    <div className="col-4">
                        <ChildProps showname={this.showname} movie={this.movie3} />
                    </div>
                    <div className="col-4">
                        <ChildProps showname={this.showname} movie={this.movie3}/>
                    </div>
                </div>
            </div>
        )
    }
}
