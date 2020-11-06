import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SidebarSuggestions from './SidebarSuggestions';
import Title from './Title';


const FormatLyrics = ({ lyrics }) => {
  lyrics = lyrics.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
  const lines = lyrics.split('\n');

  // display lyrics in a proper format
  return (
    lines.map((line, ind) => (
      <Fragment key={ind}>
        <span>{line}</span>
        <br/>
      </Fragment>
    ))
  );
}

class ShowLyrics extends Component {
  state = {
    fetching: true,
    found: false,
    lyrics: '',
    errorMsg: '',
    ytVideoID: '',
  };


  validUrlParams = () => {
    const { artist, title } = this.props.match.params;

    if ( artist === '' || title === '' ) {
      return false;
    }

    return true;
  }

  fetchLyrics = () => {
    const { artist, title } = this.props.match.params;

    axios
      .get(`https://api.lyrics.ovh/v1/${artist}/${title}/`)
      .then(res => {
        // console.log(res.data);
        this.setState({ fetching: false, found: true, lyrics: res.data.lyrics });
        // this.fetchYoutubeVideo();
      })
      .catch(err => {
        this.setState({ fetching: false, found: false, errorMsg: err.response.data.error || "Oops, Something Went Wrong!" });
      });
  }

  fetchYoutubeVideo = () => {
    const { artist, title } = this.props.match.params;

    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: `${artist} ${title}`,
        part: 'snippet',
        type: 'video',
        maxResults: 1,
        key: process.env.REACT_APP_YT_API_KEY
      }
    }).then(res => {
        // console.log(res.data.items);
        // Grab the first video
        this.setState({ fetching: false, found: true, ytVideoID: res.data.items[0].id.videoId });
    });
  }

  componentDidMount() {
    if (this.validUrlParams()) {
      this.fetchLyrics();
    }
  }

  componentDidUpdate(prevProps) {
    const newParams = this.props.match.params;
    const oldParams = prevProps.match.params;

    // Only update the component if the current and previous props don't match ( in this case the url parameters ),
    // reset the state at the end
    if ((newParams.artist !== oldParams.artist) || (newParams.title !== oldParams.title)) {
      console.log("component updated!");

      this.setState({ fetching: true, found: false, errorMsg: '', lyrics: '' });
      if (this.validUrlParams()) {
        this.fetchLyrics();
      }
    }
  }


  render() {
    const { artist, title } = this.props.match.params;
    const { fetching, found, errorMsg, lyrics, ytVideoID } = this.state;
    const tabTitle = `${artist} - ${title}`.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    // const { fetching, found, errorMsg, lyrics } = this.state;
    const ytURL = `http://www.youtube.com/embed/${ytVideoID}`;


    const result = (
      fetching ? (
        <Fragment><div className="loader"></div></Fragment>
      ):(
        found ? (
          <Fragment>
            <div className="grid-container">
              <div className="lyrics grid-item card-container">
                <h4 className="song-info" style={{textTransform: "capitalize"}}>{artist} - {title}</h4>
                <FormatLyrics lyrics={lyrics} />
              </div>
              <div className="grid-item" style={{paddingTop: "0.2rem"}}>
               <iframe title="ytvideo" id="player" type="text/html" width="420" height="315"
                 src={ytURL}
                 frameBorder="0"></iframe>
                <SidebarSuggestions artist={artist} title={title} />
              </div>
            </div>
          </Fragment>
        ):(
          <p className="lyrics" style={{color: "red"}}>{errorMsg}</p>
        )
      )
    );

    return (
      <div className="container">
        <Title title={`Verse | ${tabTitle} Lyrics`} />
        <SearchForm />
        <div className="search-result">
          {result}
        </div>
      </div>
    );
  }
}

export default ShowLyrics;
