import React, { Component } from 'react'
import axios from 'axios'

export default class Todos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos : []
        }
    }
    
    render() {
        return (
            <div>
                {this.state.todos.map(todo=>{
                    return (this.state.todos.length == 0 ? <div>Loading...</div> : (<div>
                        <p>{todo.title}</p>
                    <p>{todo.completed}</p>
                        <hr/>
                    </div>))
                })}
            </div>
        )
    }


    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res=>{
            let resData = res.data
            this.setState({todos:resData})
        }).catch(err=>{

        })
    }
}
