import { Template } from 'meteor/templating';
import { Signals } from '../api/signals.js';
import { Bricks } from '../api/bricks.js';

import './signal.js';
import './brick.js';
import './body.html';

Template.body.helpers({
	signals() {
		return Signals.find({}, { sort: { createdAt: -1 } });
	},
	bricks() {
		return Bricks.find({}, { sort: { createdAt: -1 } });
	},
});

var connection = new WebSocket('wss://www.italks.eu/app?id=BE7A0030&token=imO6dC9TflSISlAlJQu_fw');
var goodData = null;

connection.onopen = function(e) {
	console.log("Connected");
};

connection.onmessage = function(e) {
	goodData = JSON.parse(e.data);

	if (goodData.cmd == "rx") {
		Meteor.call('signals.insert', goodData);
	}
};

connection.onclose = function(e) {
	console.log("Connection closed");
};