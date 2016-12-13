var React = require('react');
var ReactDOM = require('react-dom');

var PosterContainerImg = React.createClass({
  render: function() {
    return (
      <div className="poster-container-img">
        <img src={this.props.imageURL} alt={this.props.title} />
      </div>
    )
  }
});

var EventTitle = React.createClass({
  render: function() {
    return (
      <div className="poster-container-img">
        <p>{this.props.eventTitle}</p>
      </div>
    )
  }
});

var EventDate = React.createClass({
  render: function() {
    return (
      <div className="poster-container-img">
        <p>{this.props.eventDate}</p>
      </div>
    )
  }
});

var CardContainer = React.createClass({
  render: function() {
    return (
      <div className="thumbnail">
        <PosterContainerImg imageURL={this.props.imageURL} title={this.props.title}/>
        <EventTitle eventTitle={this.props.eventTitle}/>
        <EventDate eventDate={this.props.eventDate}/>
      </div>
    )
  }
});

var cardDetails = {
	title: '30 minutes',
	imageURL: 'https://in.bmscdn.com/events/eventbanner/1009858.jpg',
	eventTitle: 'Sunburn Arena with David Guetta',
	eventDate: 'Jan 13 - 15'	
};

var element = React.createElement(CardContainer, cardDetails);

ReactDOM.render(element, document.getElementById('app'));