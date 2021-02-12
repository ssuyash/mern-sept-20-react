import React, { Component } from 'react'
import axios from 'axios'

export default class Moviesearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             movie:{}
        }
    }

    searchMovie = ()=>{
       let url = `http://www.omdbapi.com/?t=${this.state.title}&apikey=92d8e844`
       axios.get(url).then(res=>{
        console.log(res.data)
        this.setState({movie:res.data})
       }).catch(err=>{
        console.log(err)
       })
    }
    
    render() {
        return (
            <div className="container">
              <div className="row mt-5">
              <div className="col-md-8">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="movie title" 
                    value={this.state.title}
                    onChange={(e)=>this.setState({title:e.target.value})}
                    />
                </div>
                <div className="col-md-4">
                    <button 
                    className="btn btn-info"
                    onClick = {this.searchMovie}
                    >Search</button>
                </div>
              </div>


              <div className="row mt-5">
                  <div className="col-md-12">
                      <table>
                          <tbody>
                        <tr>
                            <th>Title</th>
        <td>{this.state.movie.Title}</td>
                        </tr>


                        <tr>
                            <th>Awards</th>
        <td>{this.state.movie.Awards}</td>
                        </tr>


                        <tr>
                            <th>Actors</th>
        <td>{this.state.movie.Actors}</td>
                        </tr>
                        </tbody>
                      </table>
                  </div>
              </div>
                
            </div>
        )
    }
}
