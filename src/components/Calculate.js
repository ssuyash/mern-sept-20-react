import React, { Component } from 'react'
import axios from 'axios'

export default class Calculate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        }
    }

    add = ()=>{
        let url = `http://localhost:8080/add`
        let {num1, num2} = this.state
        let reqBody = {
            num1, num2
        }

        axios.post(url, reqBody).then(res=>{
           this.setState({result:res.data.result})
        }).catch(err=>{

        })

    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <input 
                        className="form-control" 
                        type="number" 
                        value={this.state.num1}
                        onChange = {(e)=>{
                            this.setState({num1:e.target.value})
                        }}
                        ></input>
                    </div>

                    <div className="col-md-6">
                    <input 
                        className="form-control" 
                        type="number" 
                        value={this.state.num2}
                        onChange = {(e)=>{
                            this.setState({num2:e.target.value})
                        }}
                        ></input>

                    </div>

                    <div className="col-md-2 mt-4">
                        <button 
                        className="btn btn-outline-primary"
                        onClick={this.add}
                        >+</button>
                    </div>

                    <div className="col-md-2 mt-4">
                        <button className="btn btn-outline-primary">-</button>
                    </div>

                    <div className="col-md-2 mt-4">
                        <button className="btn btn-outline-primary">*</button>
                    </div>

                    <div className="col-md-2 mt-4">
                        <button className="btn btn-outline-primary">/</button>
                    </div>

                    <div className="col-md-2 mt-4">
                        <button className="btn btn-outline-primary">%</button>
                    </div>

                    <div className="col-md-12 mt-4">
                        <p>
                            Result : {this.state.result}
                        </p>
                    </div>



                </div>

            </div>
        )
    }
}
