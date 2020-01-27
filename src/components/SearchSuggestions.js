import React, { Component, Fragment } from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';


const ShowSuggestions = ({ suggestions }) => {
  return (
    suggestions.map((suggestion, ind) => (
      <Fragment key={ind} >
        <Link className="sugestionLink" to={`/lyrics/${suggestion.artist.name}/${suggestion.title}`}>
          <div className="grid-item card">
            <img src={suggestion.album.cover_medium} alt=""/>
            <div className="card-container">
              <h2 className="suggestion-title">{suggestion.title}</h2>
              <p className="suggestion-artist">{suggestion.artist.name}</p>
            </div>
          </div>
        </Link>
      </Fragment>
    ))
  );
}

class SearchSuggestions extends Component {
  state = {
    fetching: true,
    found: false,
    suggestions: [],
    errorMsg: '',
  };

  componentDidMount() {
    console.log("Hello!");
    if (this.validUrlParams()) {
      this.fetchSuggestions();
    }
  }

  validUrlParams = () => {
    const { title } = this.props.match.params;

    if ( title === '') {
      return false;
    }

    return true;
  }

  removeDuplicates = (res) => {
    let seenSuggestions = [];
    let uniqueSuggestions = [];
    let items = res.data.data;

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
    const { title } = this.props.match.params;

    axios
      .get(`https://api.lyrics.ovh/suggest/${title}`)
      .then(res => {
        // res.data.data.forEach((item) => {
        //   console.log(item.album.cover_medium);
        // })
        this.setState({ fetching: false, found: true, suggestions: this.removeDuplicates(res) });
      })
      .catch(err => {
        this.setState({ fetching: false, found: false, errorMsg: "Oops, Something Went Wrong!" });
      });
  }

  componentDidUpdate(prevProps) {
    const newParams = this.props.match.params;
    const oldParams = prevProps.match.params;


    // Only update the component if the current and previous props don't match ( in this case the url parameters ),
    // reset the state at the end
    if ((newParams.title !== oldParams.title)) {
      console.log("component updated!");

      this.setState({ fetching: true, found: false, errorMsg: '', suggestions:[] });

      if (this.validUrlParams()) {
        this.fetchSuggestions();
      }
    }
  }


  render() {
    const { fetching, found, suggestions, errorMsg } = this.state;
    const { title } = this.props.match.params;

    const result = (
      fetching ? (
        <Fragment><div className="loader"></div></Fragment>
      ):(
        found ? (
          <div className="suggestions grid-container">
            { suggestions.length === 0 ? <p style={{color: "red"}}>None found</p> : <ShowSuggestions suggestions={suggestions} /> }
          </div>
        ):(
          <p className="lyrics" style={{color: "red"}}>{errorMsg}</p>
        )
      )
    );

    return (
      <div className="container">
        <Title title={`Search results for ${title} | Verse`} />
        <SearchForm />
        <h1 style={{paddingTop: "2rem", borderBottom: "1px solid black"}}>Search Results for "<span style={{color: "#8f332c", fontStyle: "italic"}}>{title}</span>":</h1>
        {result}
      </div>
    );
  }
}

export default SearchSuggestions;
