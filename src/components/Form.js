import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todo:"",
             todos:[]
        }
    }

    addTodo = ()=>{
        // let todo = this.state.todo
        // let todos = [...this.state.todos]
        let {todo, todos} = this.state 
        todos.push(todo)
        this.setState({todos:todos, todo:""})

    }

    fetchData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            let dataTodos = res.data.map(todo=>todo.title)
            this.setState({todos:dataTodos})
        }).catch((err)=>{
            alert("something went wrong")
            console.log(err)
        })
    }
    
    render() {
        return (
            <div>
                <span></span>
                <div className="row">
                    <div className="col-md-8">
                    <input 
                className="form-control"
                value={this.state.todo} onChange={(e)=>{
                    this.setState({todo:e.target.value})
                }}/>
                    </div>
                    <div className="col-md-4">
                    <button onClick={this.addTodo} className="btn btn-primary btn-block">+</button>

                    </div>
                    <button className="btn btn-info" onClick={this.fetchData}>Get server data</button>
                </div>
                


               <div className="col-md-6 mt-5">
                  {this.state.todos.length > 0 ? ( <ul className="list-group">
                        {this.state.todos.map((todo, index)=>{
                            return (<li className="list-group-item" key={index}>{todo}</li>)
                        })}
                   </ul>) : (
                       <p>No task available yet.</p>
                   )}
               </div>
            </div> 

        )
    }
}



