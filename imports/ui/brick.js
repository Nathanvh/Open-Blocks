import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Signals } from '../api/signals.js';
 
import './brick.html';
 
Template.brick.helpers({
	latestSignal: function() {
		return Signals.findOne( { "device": this.device }, { sort: { createdAt: -1 } });
	}
});