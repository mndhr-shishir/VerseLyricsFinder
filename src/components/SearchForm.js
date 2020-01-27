import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
  state = {
    query: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="input-form">
        <form>
          <input className="input" placeholder="enter any song or artist" name="query" type="text" value={query} onChange={this.handleChange}/>
          <Link to={`/search/${query}`}>
            <button
               className="button submit"
               type="submit"
               disabled={!query}>Search</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchForm;
