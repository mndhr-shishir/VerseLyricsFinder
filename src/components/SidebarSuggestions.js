import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SidebarSuggestions extends Component {
  state = {
    fetching: true,
    found: false,
    suggestions: [],
    errorMsg: '',
  };

  componentDidMount() {
    this.fetchSuggestions();
  }

  removeDuplicates = (res) => {
    const { artist, title } = this.props;

    let seenSuggestions = [];
    let uniqueSuggestions = [];

    // Remove the originally searched song
    let items = res.data.data.filter((item) => (
      item.artist.name.toLowerCase() === artist.toLowerCase() &&
      item.title.toLowerCase() !== title.toLowerCase()
    ));

    items.forEach((item) => {
      let str = item.title + '-' + item.artist.name;

      if ( seenSuggestions.indexOf(str) >= 0 ) {
        return;
      } else {
        seenSuggestions.push(str);
        uniqueSuggestions.push(item);
      }
    });

    return uniqueSuggestions;
  }

  fetchSuggestions = () => {
    const { artist } = this.props;

    axios
      .get(`https://api.lyrics.ovh/suggest/${artist}`)
      .then(res => {
        this.setState({ fetching: false, found: true, suggestions: this.removeDuplicates(res) });
      })
      .catch(err => {
        this.setState({ fetching: false, found: false, errorMsg: "Oops, Something Went Wrong!" });
      });
  }

  render() {
    return (
      <div style={{textAlign: "left"}}>
        <h3 style={{marginTop: "2rem", borderBottom: "1px solid black"}}>Other tracks by <span style={{textTransform: "capitalize"}}>{this.props.artist}</span></h3>
        <ul style={{listStyle: "none"}}>
        {this.state.suggestions.map((item, ind) =>
          <li key={ind} style={{marginBottom: ".2rem"}}>
            <Link style={{color: "navy"}} to={`/lyrics/${item.artist.name}/${item.title}`}>
              <img style={{verticalAlign: "middle"}} src={`${item.album.cover_small}`} alt=""/>
              <span> {item.artist.name} - {item.title}</span>
            </Link>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default SidebarSuggestions;
