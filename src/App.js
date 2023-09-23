import React, { Component } from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs";

class App extends Component {
    state ={
        songs
    }
    sortByTitle = () =>{
        this.setState({
        songs:[...this.state.songs.sort((a, b) =>a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]
    });
    }
    sortByRating = () =>{
        this.setState({
            songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)]
        });
        
    };
  render() {
    return <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button className="st-btn" onClick={this.sortByTitle}>Sort by Title</button>
        <button className="st-btn" onClick={this.sortByRating}>Sort by Rating</button>
        <div className="song-list">
            {this.state.songs.map((elm) => <SongCard key={elm.id} data={elm}/>)}
        </div>
      </div>
  }
}

export default App;
