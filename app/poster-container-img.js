var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="poster-container-img">
				<img src={this.props.content} />
			</div>
		)
	}
});