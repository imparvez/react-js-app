var React = require('react');
var ReactDOM = require('react-dom');
var PosterImageContainer = require('./poster-container-img.js');

var options = {
	cardData: [{
		imageUrl : 'http://in.bmscdn.com/events/moviecard/ET00029122.jpg',
		header: 'Airlift',
		descriptions: 'Hindi',
		title: 'Book Now'
	},{
		imageUrl : 'http://in.bmscdn.com/events/moviecard/ET00036781.jpg',
		header: 'Jugni',
		descriptions: 'Hindi',
		title: 'Book Now'
	},{
		imageUrl : 'http://in.bmscdn.com/events/moviecard/ET00035918.jpg',
		header: 'Kya Kool hain hum 3',
		descriptions: 'Hindi',
		title: 'Book Now'
	}]
};

var Hello = React.createClass({
  render: function () {
    return (
      <div className="card-container">
      	<PosterImageContainer />
      </div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));