import React, { Component } from 'react'

export default class Dicegame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scoreOne: 0,
            scoreTwo: 0,
            diceFace: 1,
            chance: 0,
            winningScore : 50
        }
    }

    rollDice = () => {
        let face = Math.round(Math.random() * 10000) % 6 + 1
        let { scoreOne, scoreTwo, chance , winningScore} = this.state
        if (chance == 0) {
            scoreOne += face
            chance = 1
        } else {
            scoreTwo += face
            chance = 0
        }

        if(scoreOne >= winningScore || scoreTwo >= winningScore){
            alert("Game Over")
            face = 1;
            scoreOne = 0;
            scoreTwo = 0;
            chance = 0
        }
        this.setState({ diceFace: face, scoreOne, scoreTwo, chance })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.chance == 0 ? (<div className="col-md-4 bg-secondary">
                            <p className="display-4 text-center mt-5">{this.state.scoreTwo}</p>

                        </div>) : (<div className="col-md-4">
                            <p className="display-4 text-center mt-5">{this.state.scoreOne}</p>

                        </div>)
                    }
                    <div className="col-md-4 text-center">
                        <img src={`https://dice-imgs.s3.ap-south-1.amazonaws.com/${this.state.diceFace}.png`} />
                        <br />
                        <button className="btn btn-outline-primary"
                            onClick={this.rollDice}
                        >Roll</button>
                    </div>

                    {
                        this.state.chance == 1 ? (<div className="col-md-4 bg-secondary">
                            <p className="display-4 text-center mt-5">{this.state.scoreTwo}</p>

                        </div>) : (<div className="col-md-4">
                            <p className="display-4 text-center mt-5">{this.state.scoreTwo}</p>

                        </div>)
                    }


                </div>
            </div>
        )
    }
}
