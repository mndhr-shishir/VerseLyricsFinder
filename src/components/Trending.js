import React from 'react';
import { Link } from 'react-router-dom';


// NOTE hello dude
const TopCharts = () => {
  return (
    <div className="container top-charts" style={{"textTransform": "capitalize"}}>
      <h1 style={{borderBottom: "1px solid black"}}>Trending</h1>
      <div className="grid-container">
     		<Link to={`/lyrics/justin bieber/yummy`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://e-cdn-images.deezer.com/images/cover/03c1486d3a4d7b3b99b21024a5530162/250x250-000000-80-0-0.jpg"  /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">Yummy</h3>
	     				<p className="suggestion-artist">Justin beiber</p>
	     			</div>
     			</div>
     		</Link>

        <Link to={`/lyrics/Maroon 5/Memories`}>
          <div className="grid-item card">
            <img alt="" src="http://cdn-images.deezer.com/images/cover/535b9b868b048d4c9ee460f1c0120365/250x250-000000-80-0-0.jpg"  /><br/>
            <div className="card-container">
              <h3 className="suggestion-title">Memories</h3>
              <p className="suggestion-artist">Maroon 5</p>
            </div>
          </div>
        </Link>

        <Link to={`/lyrics/Selena Gomez/Rare`}>
          <div className="grid-item card">
            <img alt="" src="http://e-cdn-images.deezer.com/images/cover/28a68240b2a9b50a1d5e2259f7bbfdcd/250x250-000000-80-0-0.jpg" /><br/>
            <div className="card-container">
              <h3 className="suggestion-title">Rare</h3>
              <p className="suggestion-artist">Salena Gomez</p>
            </div>
          </div>
        </Link>

        <Link to={`/lyrics/Drake/Come Thru`}>
          <div className="grid-item card">
            <img alt="" src="http://cdn-images.deezer.com/images/cover/c98b7299c8bd3d27e7cb27c12490a091/250x250-000000-80-0-0.jpg" /><br/>
            <div className="card-container">
              <h3 className="suggestion-title">Come Thru</h3>
              <p className="suggestion-artist">Drake</p>
            </div>
          </div>
        </Link>



        <Link to={`/lyrics/Linkin park/In the end`}>
          <div className="grid-item card">
            <img alt="" src="http://cdn-images.deezer.com/images/cover/033a271b5ec10842c287827c39244fb5/250x250-000000-80-0-0.jpg"  /><br/>
            <div className="card-container">
              <h3 className="suggestion-title">In the end</h3>
              <p className="suggestion-artist">Linkin park</p>
            </div>
          </div>
        </Link>

        <Link to={`/lyrics/Coldplay/Fix you`}>
          <div className="grid-item card">
            <img alt="" src="http://cdn-images.deezer.com/images/cover/2c9eb55e187a9c012a10803a1b1790a6/250x250-000000-80-0-0.jpg"  /><br/>
            <div className="card-container">
              <h3 className="suggestion-title">Fix you</h3>
              <p className="suggestion-artist">Coldplay</p>
            </div>
          </div>
        </Link>

        <Link to={`/lyrics/Coldplay/ The Scientist`}>
          <div className="grid-item card">
            <img alt="" src="http://e-cdn-images.deezer.com/images/cover/5ba1787e1ec36dbbca38ff01fea8fb21/250x250-000000-80-0-0.jpg"  /><br/>
            <div className="card-container">
              <h3 className="suggestion-title"> The Scientist</h3>
              <p className="suggestion-artist">Coldplay</p>
            </div>
          </div>
        </Link>

        <Link to={`/lyrics/Green day/Know your enemy`}>
          <div className="grid-item card">
            <img alt="" src="http://cdn-images.deezer.com/images/cover/1e17054b7bfa6576f64ea867b71ef479/250x250-000000-80-0-0.jpg"  /><br/>
            <div className="card-container">
              <h3 className="suggestion-title">Know your enemy </h3>
              <p className="suggestion-artist">Greenday</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TopCharts;
