import React, {Component} from 'react'
// import FirstComponent from './components/FirstComponent';
// import Greet from './components/Greet'
import Form from './components/Form'
import Balancesheet from './components/Balancesheet'
import Moviesearch from './components/Moviesearch'
import Calculator from './components/Calculator'
import Dicegame from './components/Dicegame'
import './assets/css/style.css'
import Lifecycle from './components/Lifecycle'
import Todos from './components/Todos'


export default class App extends Component{
  
constructor(props) {
  super(props)

  console.log("constructor : App")
  this.state = {
     count:0,
     showLifeCycle:true
  }
}

 
 render(){
   return (
    <div>
      <div>{this.state.count}</div>
      <button onClick={(e)=>{
        let prevCount = this.state.count
        prevCount++
        this.setState({count:prevCount})
      }}>increment</button>

      {this.state.showLifeCycle ?  <Lifecycle/>  : null}
         <button onClick={
           ()=>this.setState({showLifeCycle:false})
         }>Hide Lifecycle</button>
    </div>

  
   )
 }




}




