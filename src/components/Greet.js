import React, { Component } from 'react'

export default class Greet extends Component {    
    constructor(props){
        super(props)

        this.state = {
            count : 0,
            students:[
                {name:"Bhavishya", courseName:"MERN"},
                {name:"Nandenee", courseName:"MERN"},
                {name:"Alpna", courseName:"MERN"},
                {name:"Anukriti", courseName:"MERN"},
                {name:"Arpita", courseName:"MERN"},
                {name:"Piyush", courseName:"MERN"},
            ]
        }
    }

    incCounter = ()=> {
        let prevState = this.state.count
        prevState++
        this.setState({count:prevState})
    }

    
    render() {
        return (
            <div>
                Good {this.props.time} {this.props.name}
                
                {this.state.count}
                
                {this.state.count % 2 === 0 ? (<p>Count is Even</p>) : (<p>Count is Odd</p>)}

                &nbsp;&nbsp;&nbsp;<button onClick={this.incCounter}>inc counter</button>

                {this.state.students.map((student, index)=>{
                    return (
                        <p key={index} >Name : {student.name} Course : {student.courseName}</p>
                    )
                })}

            </div>
        )
    }
}


//name, time
