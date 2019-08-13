import React, { Component } from 'react'
import './App.css';
import { Link } from "react-router-dom"
import service from './service'

export default class Main extends Component {

    state = {
        users: []
      }
    
    // VERSION FETCH HARDCODEADA
    // -------------------------
    // componentDidMount(){
    //     const profileSize = 50;
    //     fetch(`https://randomuser.me/api/?results=${profileSize}`)
    //         .then(res => res.json())
    //         .then(response => {
    //                 console.log(response.results)
    //                 this.setState({users: response.results})
    //         })
    // }

    // VERSION ASYNC AWAIT CON IMPORTACION DEL SERVICE
    // -----------------------------------------------
    async componentDidMount(){
        var users;
        try {
            users = await service.getUsers()
        } catch(e) { 
            console.error(e); 
            users = null 
        }
        this.setState({users})
    }

    getUserData(user){
        localStorage.setItem("userSelected", JSON.stringify(user))
    }

    render() {
        return (
            <div className="gridView">
                {
                this.state.users.map((user, i) => {
                return(
                    <div key={i}>
                        <div className="card" style={{width: "18rem", margin:"10px"}}>
                            <div className="card-header">
                                <h5 className="card-title"> Fullname: {user.name.first} {user.name.last}</h5>
                            </div>
                            <div className="card-body">
                                <Link to={`/${user.email}`} key={i} onClick={() => this.getUserData(user)}>
                                    <img src={user.picture.thumbnail} alt="Rodrigo"></img>
                                </Link>
                            </div>
                            <div className="card-footer">
                                <h5 className="card-title">Location: {user.location.state} ({user.location.city})</h5>
                            </div>
                        </div>
                    </div>
                )
                })
            }       
            </div>
        )
    }
}