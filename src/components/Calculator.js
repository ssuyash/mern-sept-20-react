import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            btns:[
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "*", "/", "-", "%","="
            ],
            disp:"",
            isCalculated:false
        }
    }

    handleInp = (pressedBtn)=>{
        console.log(pressedBtn)
      
        let {disp, isCalculated} = this.state

        if(isCalculated){
            disp = ""
            isCalculated = false
        }

        if(pressedBtn == '='){
            disp = eval(disp)
            isCalculated = true
        }else{
            disp += pressedBtn
        }

 

        
        this.setState({disp:disp, isCalculated})
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 mt-5">
                    <div className="row">
                        <div className="col-md-12">
        <textarea className="form-control disp text-muted " value={this.state.disp}></textarea>
                        </div>

                        {this.state.btns.map((btn, ind)=>{
                           return (<div key={ind} className="col-md-3 mt-3">
                            <button 
                            className="btn btn-outline-primary col-12"
                            onClick={()=>this.handleInp(btn)}
                            >{btn}</button>
                        </div>)
                       })}


                    </div>
                </div>
            </div>
        )
    }
}
