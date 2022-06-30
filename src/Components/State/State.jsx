import React, { Component } from 'react'

export default class State extends Component {
    state={
        isShowMessage:true,
    };
    
   
    hidenShowMessage=()=>{
        // this.state.isShowMessage=false;
        // console.log(this.state.isShowMessage);
        const newstate={
            isShowMessage:false,
        }
        this.setState(newstate,()=>{
            console.log(this.state.isShowMessage);
        });
    };
     showMessage=()=>{
       this.setState({
        isShowMessage:true,
       },()=>{
        console.log(this.state.isShowMessage);})
       
    };
  render() {
    console.log("rendering...");
    return (
      <div>
        <h4>State</h4>
        <div>
            <button className='btn btn-warning' onClick={this.showMessage} >Show</button>
            <button className='btn btn-light'onClick={this.hidenShowMessage}>Hidden</button>
        </div>
        {
            this.state.isShowMessage&&(<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam facilis ratione eius eveniet, quam rem et asperiores, molestiae, hic saepe possimus aut dolore dolor temporibus rerum error eum ipsam sit inventore vel? Necessitatibus, vero doloribus deleniti ipsam voluptatum dolore?</p>)
        }
        
      </div>
    )
  }
}
