var React = require('react');
var ReactDOM = require('react-dom');
var Badgers = require('react-badgers');

var App = React.createClass({
	render () {
		return (
			<div>
				<Badgers />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
