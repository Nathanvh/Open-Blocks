import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Signals = new Mongo.Collection('signals', {
	transform: function (document) {

		document.temp = (document.temp / 25).toFixed(1);
		document.createdAt = document.createdAt.toString().substring(16, 21);

		return document;
	},
});

Meteor.methods({
	'signals.insert'(goodData) {

		Signals.insert({
			device: goodData.EUI,
			createdAt: new Date(goodData.ts),
			temp: goodData.data.slice(0,4),
			light: goodData.data.slice(4,8),
			sound: goodData.data.slice(8,12),
			littleBit: goodData.data.slice(12,16),
			recievedAt: new Date(),
		});
	},
});