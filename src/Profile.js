import React, { Component } from 'react'

export default class Profile extends Component {

    state = {
        first_name:"", last_name: "", username: "", 
        email: "", street:"", state:"", postCode:""
    }

    componentDidMount(){
        const dataUser = JSON.parse(localStorage.getItem('userSelected'));
        this.setState({
            first_name: dataUser.name.first,
            last_name: dataUser.name.last,
            username: dataUser.login.username,
            email: dataUser.email,
            street: dataUser.location.street,
            state: dataUser.location.state,
            postCode: dataUser.location.postcode,
            picture: dataUser.picture.large
        });
    }

    render() {
        return (
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.state.picture} alt="..."></img>
                    </div>
                    <div className="card col-md-8">
                        <div className="card-header">
                            <h2 className="card-title">First name: {this.state.first_name}</h2>
                            <p className="card-text">Last name: {this.state.last_name}</p>
                            <p className="card-text"><small className="text-muted">Username: {this.state.username}</small></p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Email: {this.state.email}</h5>
                            <p className="card-text">Street: {this.state.street}</p>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">CP: {this.state.postCode}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}