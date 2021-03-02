import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor: Lifecycle")
    
        this.state = {
             count : 19
        }
    }
    

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps: Lifecycle")
        return null
    }


    render() {
        console.log("Render : Lifecycle")
        return (
            <div>
                {this.state.count}
            </div>
        )
    }

    componentDidMount(){
        console.log("componentDidMount  :  Lifecycle")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate  :  Lifecycle")

        return false
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate  :  Lifecycle")


        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate  :  Lifecycle")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount  :  Lifecycle")
    }
}
