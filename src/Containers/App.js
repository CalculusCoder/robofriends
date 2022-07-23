import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        })
    }

    onSearchChange = (event) => {     //Event listener function for searchbox
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="app-container">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}></SearchBox>
                    <Scroll>
                    <CardList robots = { filteredRobots }></CardList>
                    </Scroll>
            </div>
        );
    }
}

export default App;