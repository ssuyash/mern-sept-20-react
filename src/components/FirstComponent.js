import React, {Component} from 'react';

class FirstComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn:false
        }

    }

    //this

    handleClick = ()=>{        
        this.setState({isLoggedIn:true})
    }

    render(){
        return (
            <div>
                {this.state.isLoggedIn ? 
                    <h1>Hello {this.props.name}</h1> 
                    : 
                    <div>
                        <p>Please log in first</p>
                        <button onClick={this.handleClick}>Login</button>
                    </div>

                }

                
            </div>
            
        )
    }
}


export default FirstComponent;

