import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';


// NOTE hello dude
const TopCharts = () => {
  return (
    <div className="container top-charts" style={{"textTransform": "capitalize"}}>
      <SearchForm />
      <h1 style={{borderBottom: "1px solid black"}}>Top Charts</h1>
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

     		 <Link to={`/lyrics/One Direction/ you and i`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://cdn-images.deezer.com/images/cover/620bcd9a3310b1bfaba639b060b54abf/250x250-000000-80-0-0.jpg" /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">You and I</h3>
	     				<p className="suggestion-artist">One Direction</p>
	     			</div>
     			</div>
     		</Link>

     		<Link to={`/lyrics/Lil Nas X/Old Town Road`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://cdn-images.deezer.com/images/cover/3cfd6900fd2b342ec0e478faf300f6a2/250x250-000000-80-0-0.jpg" /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">Old Town Road</h3>
	     				<p className="suggestion-artist">Lil Nas X</p>
	     			</div>
     			</div>
     		</Link>

     		 <Link to={`/lyrics/Post Malone/Circles`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://e-cdn-images.deezer.com/images/cover/4642b8e3e0a89f92a6e2bfed13d8f31c/250x250-000000-80-0-0.jpg" /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">Circles</h3>
	     				<p className="suggestion-artist">Post Malone</p>
	     			</div>
     			</div>
     		</Link>


     		<Link to={`/lyrics/coldplay/paradise`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://cdn-images.deezer.com/images/cover/e0dd8263dfed37c50a868abbf65fd7da/250x250-000000-80-0-0.jpg" /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">paradise</h3>
	     				<p className="suggestion-artist">coldplay</p>
	     			</div>
     			</div>
     		</Link>


     		<Link to={`/lyrics/Adele/hello`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://cdn-images.deezer.com/images/cover/ce5e6f3cfccf03122f43d034e1e4a787/250x250-000000-80-0-0.jpg" /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">Hello</h3>
	     				<p className="suggestion-artist">Adele</p>
	     			</div>
     			</div>
     		</Link>


     		<Link to={`/lyrics/Post Malone/rockstar`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://e-cdn-images.deezer.com/images/cover/c000a4d39f31f3716bf3f11aa5fab080/250x250-000000-80-0-0.jpg"  /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">rockstar</h3>
	     				<p className="suggestion-artist">Post malone</p>
	     			</div>
     			</div>
     		</Link>

     		<Link to={`/lyrics/Adele/Someone like you`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://e-cdn-images.deezer.com/images/cover/9b6631d561dfb47af0d125b150e83ceb/250x250-000000-80-0-0.jpg"  /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">Someone like you</h3>
	     				<p className="suggestion-artist">Adele</p>
	     			</div>
     			</div>
     		</Link>

     		<Link to={`/lyrics/coldplay/yellow`}>
     			<div className="grid-item card">
	     			<img alt="" src="http://cdn-images.deezer.com/images/cover/3a31bfbc6678856d2cfe10dbb22b8a24/250x250-000000-80-0-0.jpg"  /><br/>
	     			<div className="card-container">
	     				<h3 className="suggestion-title">Yellow</h3>
	     				<p className="suggestion-artist">coldplay</p>
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

        <Link to={`/lyrics/Greenday/Know your enemy`}>
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
